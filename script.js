document.getElementById("barcode-form")
 .addEventListener("submit", function(
  event) {
  event.preventDefault();

  const input = document
   .getElementById("barcode-input")
   .value.trim();
  const barcode = document
   .getElementById("barcode");
  const downloadContainer = document
   .getElementById(
    "download-container");
  const downloadBtn = document
   .getElementById("download-btn");

  if (input) {
   // Gerar código de barras
   JsBarcode(barcode, input, {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 100,
    displayValue: true,
    fontSize: 18,
   });

   // Exibir o botão de download
   downloadContainer.style.display =
    "block";

   // Função para baixar o código de barras
   downloadBtn.addEventListener(
    "click",
    function() {
     const svgElement = document
      .getElementById("barcode");
     const svgData =
      new XMLSerializer()
      .serializeToString(svgElement);
     const canvas = document
      .createElement("canvas");
     const ctx = canvas.getContext(
      "2d");
     const image = new Image();
     const svgBlob = new Blob([
      svgData
     ], {
      type: "image/svg+xml"
     });
     const url = URL.createObjectURL(
      svgBlob);

     image.onload = function() {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      const imgData = canvas
       .toDataURL("image/png");

      // Criar link para download
      const link = document
       .createElement("a");
      link.href = imgData;
      link.download =
       "codigo_de_barras.png";
      link.click();
     };

     image.src = url;
    });
  } else {
   alert(
    "Por favor, insira um texto ou número válido."
   );
  }
 });
