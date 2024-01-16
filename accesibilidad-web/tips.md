# Trucos para mejorar la accesibilidad

1. Usar la herramienta de chrome para simular las discapacidades visuales.
2. Navegar manualmente por la pagina con el teclado usando la tecla tab y shift + tab para ir hacia atras.
3. Los unicos elementos que pueden tener el foco son los botones, enlaces, campos de texto, checkbox, radio button, select, textarea, etc.
4. Usar lectores de pantalla.
5. Usar HTML semantico.

```html
<header></header>
<nav></nav>
<main></main>
<footer></footer>
```

6. Usar aria-label para darle un nombre a un elemento que no tiene texto.

```html
<button aria-label="Cerrar"></button>
```

7. Usar label para darle un nombre a los campos de texto, checkbox, radio button, select, textarea, etc.

```html
<label for="nombre">Nombre</label> <input type="text" id="nombre" />
```

8. Usar arial-hidden para ocultar elementos que no son visibles pero que son leidos por los lectores de pantalla.

```html
<span aria-hidden="true">X</span>
```

9. Usar las herramientas de navegador para mejorar el contraste de los colores.
10. Usar skip links para saltar a los contenidos principales.

```html
<a class="skip-link" href="#main">Saltar al contenido principal</a>
...
<main id="main"></main>
```

```css
.skip-link {
  height: 0;
}

.skip-link:focus,
.skip-link:active {
  background-color: ...;
  color: ...;
  ...;
}
```

11. Añadir información a los enlaces

```html
<a href="https://www.google.com" title="Ir a Google">Google</a>
```

12. Al usar hover tambien usar focus para los usuarios que navegan con el teclado. (En algunos casos es bueno usar css :focus-within)
13. Usar tabindex para darle foco a elementos que no son enlaces, botones, checkbox, radio button, select, textarea, etc.

- Valor negativo(-1): El elemento debe ser enfocado, pero no debe de ser accesible a través de la navegación.

- Valor positivo (>0): Debe poder ser enfocado y su orden relativo es definido por el valor del atributo.

- Valor de 0: Debe ser enfocado y ser accesible a través de la navegación secuencial del teclado, pero su orden relativo es definido por convención de la plataforma.

14. Usar aria-live para indicar que un elemento cambia dinamicamente, por ejemplo: un mensaje de error por un input faltante en un formulario, o un mensaje de confirmación.

- Off: Es el estado predeterminado.

- Polite: Espera a que el lector de pantalla termine de leer el elemento actual. Se utiliza cuando el mensaje que se quiere comunicar, no es importante

- Assertive: Interrumpe la lectura para dar el mensaje. Se utiliza cuando se quiere dar prioridad al mensaje, por ejemplo, en el mensaje de confirmación del envío de un formulario .
