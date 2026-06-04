"use client";

import  Link  from 'next/link'
import { IMGPages, PDFpages } from '@/constants/pages'
import Image from 'next/image'
import { openCreatorTelegram, sendFeedback } from '@/constants/feedback'
import { useState } from 'react';

const Footer = () => {
    const [openFB, setOpenFB] = useState(false);
    const [FBtext, setFBtext] = useState('');
  return (  
    <>
  <div className='footer-parent'>
    <ul className='f-tools-dropDown-menu'>
        <div className='f-menuTitle'>
            <Image width={20} height={20} src="/image.png" alt="icon" />
            <p>image</p>
        </div>
        <div className='f-menuTitle'>
            <Image width={20} height={20} src="/document.png" alt="icon" />
            <p>PDF & Documents</p>
        </div>
        <div className='f-imageTabs'>
        {
        IMGPages.map((page, index)=>(
            <li className='tools-dropDown-option' key={index}><Link href={page.path}>{page.name}</Link></li>
        ))
        
        }  
        </div>
        <div className='f-PDFtabs'>
        {
        PDFpages.map((page, index)=>(
            <li className='f-tools-dropDown-option' key={index}><Link href={page.path}>{page.name}</Link></li>
        ))
        
        }
        </div>
    </ul>
    <div className='contact-parent'>
        <div className='createrTEL' onClick={()=>{openCreatorTelegram()}} style={{display:'flex',cursor: 'pointer', gap:5}} >
            <Image width={20} height={20} src="/email.png" alt="icon" />
            <p>Creator: Rahoon</p>
        </div>
        <div onClick={()=>{setOpenFB(true)}} style={{display:'flex', gap:5, }}>
            <Image width={20} height={20} src="/FB.png" alt="icon" />
            <p>Tell us what you think</p>
        </div>
        
    </div>
  </div>
    {openFB && (
        <div className="FB-modal" onClick={(e) => { if (e.target === e.currentTarget) setOpenFB(false); }}>
            <div className="FB-card">
            <div className="FB-header">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="var(--highlight)" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
                <span>Send Feedback</span>
                <button className="FB-close" onClick={() => setOpenFB(false)}>✕</button>
            </div>

            <textarea
                className="FB-textarea"
                placeholder="What's on your mind?"
                maxLength={500}
                onChange={(e) => setFBtext(e.target.value)}
                value={FBtext}
            />

            <div className="FB-footer">
                <span className="FB-char">{(FBtext || "").length}/500</span>
                <div className="FB-actions">
                <button className="new-file-btn" onClick={() => setOpenFB(false)}>Cancel</button>
                <button
                    className="BTN A"
                    disabled={!FBtext?.trim()}
                    onClick={() => { sendFeedback(FBtext); setOpenFB(false); setFBtext(""); }}
                >
                    Send ↗
                </button>
                </div>
            </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Footer