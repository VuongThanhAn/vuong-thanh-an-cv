document.getElementById('download-pdf').addEventListener('click', generatePDF);

function generatePDF() {
  const container = document.querySelector('.container');
  if (!container) return alert("CV content not found.");

  const mediaElements = document.querySelectorAll('img, video');
  mediaElements.forEach(el => el.style.display = 'none');

  const opt = {
    margin:       0.5,
    filename:     'VuongThanhAn_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  {
      scale: 2,
      useCORS: false,
      allowTaint: false,
      scrollY: 0
    },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['css', 'legacy'] } // <-- Important to avoid clipping
  };

  html2pdf().set(opt).from(container).save().then(() => {
    mediaElements.forEach(el => el.style.display = '');
  }).catch(err => {
    console.error('PDF generation error:', err);
    alert('PDF export failed. See console.');
    mediaElements.forEach(el => el.style.display = '');
  });
}
