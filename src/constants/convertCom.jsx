"use client";
// ConverterPage.jsx — کامپوننت مشترک
import { useState } from "react";
import { convertFile, getAvailableFormats, getFileType } from './fileConverter';
import Footer from "../components/footer";

const MAX_FILES = 10;

const ConverterPage = ({ title, defaultFormat, textContent }) => {
  const [inputFiles, setInputFiles] = useState([]);
  const [uploadState, setUpState] = useState('select');
  const [showFormatMenu, setShowFormatMenu] = useState(false);
  const [fileType, setFileType] = useState('');
  const [outFormat, setOutFormat] = useState(defaultFormat);

  const handleFileSelect = (files) => {
    if (!files || files.length === 0) return;
    const fileArray = Array.from(files).slice(0, MAX_FILES);
    setInputFiles(fileArray);
    setFileType(getFileType(fileArray[0]));
    setUpState('done');
  };

  // فرمت‌های ممکن بر اساس اولین فایل
  const formats = fileType ? getAvailableFormats(fileType).all : [];

  const handleConvert = () => {
    if (fileType === outFormat) {
      alert('Please Select a format!');
      return;
    }
    inputFiles.forEach(file => convertFile(file, outFormat));
  };

  return (
    <div className="homeRoot">
      {uploadState === 'select' && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', gap: 20 }}>
          <h3>{title}</h3>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileSelect(e.dataTransfer?.files);
            }}
            className="DnD-field"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.multiple = true;
              input.onchange = (e) => handleFileSelect(e.target?.files);
              input.click();
            }}
          >
            <h1>drop your files here</h1>
            <div>or <span style={{ color: 'var(--highlight)' }}>click</span> to browse</div>
          </div>
          <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>up to {MAX_FILES} files</div>
        </div>
      )}

      {uploadState === 'done' && (
        <div className="editRoot">
          <div className="editFather">
            <div className="filePre">
              {inputFiles.length === 1
                ? inputFiles[0]?.name
                : `${inputFiles.length} files selected`}
            </div>
            <div
              className="Output"
              onMouseEnter={() => setShowFormatMenu(true)}
              onMouseLeave={() => setShowFormatMenu(false)}
            >
              {showFormatMenu && (
                <ul className="formatDropList">
                  {formats.map((format, i) => (
                    <li className="formatOption" onClick={() => setOutFormat(format)} key={i}>{format}</li>
                  ))}
                </ul>
              )}
              {outFormat}
            </div>
            <button className="BTN A" onClick={handleConvert}>
              Convert
            </button>
          </div>

          {/*inputFiles.length > 1 && (
            <div style={{justifyContent:'center'}}>
            <p className="yourFilesP">your files</p>
            <ul className="file-list">
              {inputFiles.map((file, i) => (
                <div key={i} >
                  <li className="file-list-item">{file.name}</li>
                </div>
              ))}
            </ul>
            </div>
          )*/}

          <button className="new-file-btn" onClick={() => setUpState('select')}>New File</button>
        </div>
      )}

      {textContent}

      <Footer />
    </div>
  );
};

export default ConverterPage;