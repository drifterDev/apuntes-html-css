# OOCSS

1) Separación de estructura y diseño: Los estilos se dividen en dos categorías principales: estructura y diseño. La estructura define la disposición y el posicionamiento de los elementos, mientras que el diseño se refiere a la apariencia visual, como colores y fuentes.

2) Separación de contenedor y contenido: Los estilos aplicados a un contenedor no deben depender de los estilos aplicados a su contenido, y viceversa. Esto facilita la reutilización de contenedores con diferentes tipos de contenido.

## Ejemplo:

```html
<!-- Botón básico -->
<button class="btn btn-basic">Click Me</button>

<!-- Botón con borde redondeado -->
<button class="btn btn-rounded">Click Me Too</button>
```

```css
/* Estilos para el botón básico */
.btn {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ccc;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}

/* Estilos para el botón classic */
.btn-basic {
  background-color: #e6e6e6;
  color: #666;
}

/* Estilos para el botón con borde redondeado */
.btn-rounded {
  border-radius: 20px;
  background-color: #007bff;
  color: white;
}
```