const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: 1280,
      height: 1600
    },
    deviceScaleFactor: 1
  });

  const filePath = path.resolve(__dirname, "index.html");

  await page.goto(`file://${filePath}`, {
    waitUntil: "networkidle"
  });

  await page.emulateMedia({
    media: "print"
  });

  await page.pdf({
    path: path.resolve(__dirname, "VuongThanhAn_CV.pdf"),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0"
    }
  });

  await browser.close();

  console.log("CV PDF generated successfully.");
})();