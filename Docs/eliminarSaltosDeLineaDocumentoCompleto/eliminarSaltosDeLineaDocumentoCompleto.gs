function onOpen() {
  // fuente: Gemini 2.0
  var ui = DocumentApp.getUi();
  ui.createMenu('Acciones Personalizadas')
    .addItem('Eliminar Saltos de Línea (Documento Completo)', 'eliminarSaltosDeLineaDocumentoCompleto')
    .addToUi();
}

function eliminarSaltosDeLineaDocumentoCompleto() {
  Logger.log("Eliminando saltos de línea de todo el documento.");
  var body = DocumentApp.getActiveDocument().getBody();
  var texto = body.getText();
  //var textoSinSaltos = texto.replace(/\n/g, ' '); // Reemplaza saltos de línea con espacios
  var textoSinSaltos = texto.replace(/\n/g, ''); // Elimina saltos de línea
  body.setText(textoSinSaltos);
}
