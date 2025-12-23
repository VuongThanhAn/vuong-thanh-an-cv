document.getElementById('download-pdf').addEventListener('click', generatePDF);

function generatePDF() {
  const container = document.querySelector('.cv');
  if (!container) return alert("CV content not found.");

  const opt = {
    margin: 0.5,
    filename: 'VuongThanhAn_CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(container).save();
}
