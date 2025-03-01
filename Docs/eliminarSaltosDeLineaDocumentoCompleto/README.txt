Prompt:
Hola. Te consulto como puedo agregar un acceso directo a un script en Google Docs, para evitar tener que activar la pestaña de scripts cada vez que quiero ejecutar "eliminarSaltosDeLineaDocumentoCompleto"

Respuesta:
----------
¡Claro! Puedes agregar un acceso directo a tu script "eliminarSaltosDeLineaDocumentoCompleto" en Google Docs utilizando un menú personalizado. Aquí te explico cómo hacerlo:

**1. Modifica tu script para incluir la creación de un menú:**

```javascript
function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Acciones Personalizadas')
    .addItem('Eliminar Saltos de Línea (Documento Completo)', 'eliminarSaltosDeLineaDocumentoCompleto')
    .addToUi();
}

function eliminarSaltosDeLineaDocumentoCompleto() {
  var body = DocumentApp.getActiveDocument().getBody();
  var texto = body.getText();
  var textoSinSaltos = texto.replace(/\n/g, ' '); // Reemplaza saltos de línea con espacios
  body.setText(textoSinSaltos);
}
```

**Explicación:**

* **`onOpen()`**: Esta función especial se ejecuta automáticamente cuando abres el documento.
* **`DocumentApp.getUi()`**: Obtiene la interfaz de usuario del documento.
* **`ui.createMenu('Acciones Personalizadas')`**: Crea un nuevo menú llamado "Acciones Personalizadas".
* **`.addItem('Eliminar Saltos de Línea (Documento Completo)', 'eliminarSaltosDeLineaDocumentoCompleto')`**: Agrega un elemento al menú. El primer argumento es el texto que se mostrará en el menú, y el segundo argumento es el nombre de la función que se ejecutará cuando se haga clic en el elemento.
* **`.addToUi()`**: Agrega el menú a la interfaz de usuario del documento.

**2. Guarda el script.**

**3. Actualiza tu documento de Google Docs.**

Ahora, cuando abras el documento, verás un nuevo menú llamado "Acciones Personalizadas" en la barra de menú. Al hacer clic en él, verás la opción "Eliminar Saltos de Línea (Documento Completo)". Al hacer clic en esta opción, se ejecutará tu script.

**Consideraciones adicionales:**

* Puedes agregar más elementos al menú llamando a `.addItem()` varias veces.
* Puedes crear submenús utilizando `.createMenu()` dentro de otro menú.
* Si tienes problemas para visualizar el menú, prueba recargando la pagina de Google Docs, y asegurate de haber guardado el script correctamente.

Espero que esta solución te sea de gran utilidad.
