import React, { useState, useEffect, useRef } from 'react';

const PDFThumbnail = ({ src }) => {
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let pdfDoc = null;

    const renderPage = async () => {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext);
    };

    const loadPDF = async () => {
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs-dist/build/pdf.worker.js';
      pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer });
      await renderPage();
    };

    loadPDF();
  }, [src, pageNum]);

  const previousPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const nextPage = () => {
    if (pageNum < pdfDoc.numPages) {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <div>
        <button onClick={previousPage}>Previous</button>
        <span>{pageNum} of {pdfDoc ? pdfDoc.numPages : '--'}</span>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default PDFThumbnail;
