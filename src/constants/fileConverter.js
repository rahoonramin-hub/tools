import { Document, Packer, Paragraph, ImageRun } from 'docx';

// ─── Format Categories ───────────────────────────────────────────
export const IMAGE_FORMATS = ['jpg', 'png', 'webp'];
export const DOCUMENT_FORMATS = ['pdf', 'word'];

export const getFileCategory = (fileType) => {
  if (IMAGE_FORMATS.includes(fileType)) return 'image';
  if (DOCUMENT_FORMATS.includes(fileType)) return 'document';
  return 'unknown';
};

export const getAvailableFormats = (fileType) => {
  const category = getFileCategory(fileType);
  return {
    image: IMAGE_FORMATS.filter(f => f !== fileType),
    document: DOCUMENT_FORMATS.filter(f => f !== fileType),
    // فرمت فعلی از هر دو لیست حذف میشه
    all: [
      ...IMAGE_FORMATS.filter(f => f !== fileType),
      ...DOCUMENT_FORMATS.filter(f => f !== fileType),
    ],
    category,
  };
};

// ─── File Type Detection ─────────────────────────────────────────
export const getFileType = (file) => {
  switch (file.type) {
    case 'image/jpeg': return 'jpg';
    case 'image/png':  return 'png';
    case 'image/webp': return 'webp';
    case 'image/svg+xml': return 'svg';
    case 'application/pdf': return 'pdf';
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': return 'word';
    default: return file.name.split('.').pop().toLowerCase();
  }
};

// ─── Core: PDF → Canvas (یک صفحه) ───────────────────────────────
const pdfPageToCanvas = async (pdf, pageNum = 1, scale = 2) => {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
  return canvas;
};

// ─── PDF → Image ─────────────────────────────────────────────────
const pdfToImage = async (file, format) => {
  // لود پویا در سمت کلاینت برای جلوگیری از ارور سرور
  const pdfJS = await import('pdfjs-dist');
  pdfJS.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfJS.version}/build/pdf.worker.mjs`;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfJS.getDocument({ data: buffer }).promise;

  for (let i = 1; i <= pdf.numPages; i++) {
    const canvas = await pdfPageToCanvas(pdf, i);
    const url = canvas.toDataURL(`image/${format}`, 1.0);
    const a = document.createElement('a');
    a.href = url;
    a.download = `page-${i}.${format}`;
    a.click();
  }
};

// ─── PDF → Word ──────────────────────────────────────────────────
const pdfToWord = async (file) => {
  // لود پویا در سمت کلاینت برای جلوگیری از ارور سرور
  const pdfJS = await import('pdfjs-dist');
  pdfJS.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfJS.version}/build/pdf.worker.mjs`;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfJS.getDocument({ data: buffer }).promise;
  const paragraphs = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(item => item.str).join(' ');
    paragraphs.push(new Paragraph({ text: `[Page ${i}]` }));
    paragraphs.push(new Paragraph({ text }));
  }

  const doc = new Document({ sections: [{ children: paragraphs }] });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `converted.docx`;
  a.click();
  URL.revokeObjectURL(url);
};

// ─── Image → PDF ─────────────────────────────────────────────────
const imageToPDF = async (file) => {
  // لود پویا در سمت کلاینت برای جلوگیری از ارور سرور
  const jspdf = (await import('jspdf')).default;
  
  const img = new Image();
  img.src = URL.createObjectURL(file);
  await new Promise(res => (img.onload = res));

  const { naturalWidth: w, naturalHeight: h } = img;
  const doc = new jspdf({
    orientation: w > h ? 'landscape' : 'portrait',
    unit: 'px',
    format: [w, h],
  });
  doc.addImage(img, 'JPEG', 0, 0, w, h);
  doc.save(`converted.pdf`);
};

// ─── Image → Word ────────────────────────────────────────────────
const imageToWord = async (file) => {
  const buffer = await file.arrayBuffer();
  const ext = getFileType(file);
  const mimeMap = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };

  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          children: [
            new ImageRun({
              data: buffer,
              transformation: { width: 600, height: 400 },
              type: mimeMap[ext] ?? 'image/jpeg',
            }),
          ],
        }),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `converted.docx`;
  a.click();
  URL.revokeObjectURL(url);
};

// ─── Image → Image ───────────────────────────────────────────────
const imageToImage = async (file, targetFormat) => {
  const img = new Image();
  img.src = URL.createObjectURL(file);
  await new Promise(res => (img.onload = res));

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  canvas.getContext('2d').drawImage(img, 0, 0);

  const url = canvas.toDataURL(`image/${targetFormat}`, 1.0);
  const a = document.createElement('a');
  a.href = url;
  a.download = `converted.${targetFormat}`;
  a.click();
};

// ─── Main Convert (تنها تابعی که صفحات صدا میزنند) ───────────────
export const convertFile = async (file, targetFormat) => {
  const sourceType = getFileType(file);
  const sourceCategory = getFileCategory(sourceType);
  const targetCategory = getFileCategory(targetFormat);

  // image → image
  if (sourceCategory === 'image' && targetCategory === 'image') {
    return imageToImage(file, targetFormat);
  }
  // image → document
  if (sourceCategory === 'image' && targetFormat === 'pdf') {
    return imageToPDF(file);
  }
  if (sourceCategory === 'image' && targetFormat === 'word') {
    return imageToWord(file);
  }
  // document → image
  if (sourceType === 'pdf' && targetCategory === 'image') {
    return pdfToImage(file, targetFormat);
  }
  // document → document
  if (sourceType === 'pdf' && targetFormat === 'word') {
    return pdfToWord(file);
  }

  console.warn(`Conversion from ${sourceType} to ${targetFormat} not supported yet.`);
};