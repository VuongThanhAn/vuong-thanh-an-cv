document.getElementById('download-pdf').addEventListener('click', generatePDF);

function generatePDF() {
  const container = document.querySelector('.cv');
  if (!container) {
    alert("CV content not found");
    return;
  }

  const opt = {
    margin: 0,
    filename: 'VuongThanhAn_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all', 'css']
    }
  };

  html2pdf().set(opt).from(container).save();
}
