# SMACSS

Los estilos se dividen en 5 categorías principales, tambien se puede añadir variables.css:

## Categorias

1) Base (base.css)

* Estilos predeterminados

* Selecectores de elementos o pseudo-clases

* No Clases

* No ID’s

* Tamaños, Colores


```css
/* Estilos base para el texto */
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

/* Estilos base para enlaces */
a {
  color: #007bff;
  text-decoration: none;
}

/* Estilos base para formularios */
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
}
```

2) Layout (Diseño o estructura de página) (layout.css)

* Estilos para las secciones principales Header, Footer (Se usan con id o clase)

```css
/* Estilos para el encabezado */
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

/* Estilos para el pie de página */
footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

footer .l-center{
  text-align: center;
}

/* Estilos para la barra lateral */
aside {
  float: left;
  width: 25%;
}
```

3) Module (Módulos) (components.css)

Fragmentos únicos que puede contener:

* Prefijo

* Elemento

* Secundario

```css
/* Estilos para el botón */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

/* Estilos para las tarjetas de producto */
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
}

.section{
  background-color: gray;
}

.section--title{
  font-size: 1.2rem;
}
```

4) State (Estado) (states.css)

Representa situaciones dinámicas

* .is-selected

```css
/* Estilos para el enlace cuando está en hover */
a:hover {
  text-decoration: underline;
}

/* Estilos para el botón cuando está activo */
.btn:active {
  background-color: #0056b3;
}

.is-selected{
  background-color: gray;
}
```

5) Theme (Tema) (themes.css)

* Colores Primarios (dark mode)

* Formas, bordes, sombras y demas.

* Se repiten en todo el sitio

```css
/* Estilos para el tema claro */
body .theme-light {
  background-color: #fff;
  color: #333;
}

/* Estilos para el tema oscuro */
body .theme-dark {
  background-color: #333;
  color: #fff;
}

.text-xs{
  font-size: 12px;
}
```

