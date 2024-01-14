# BEM 

* bloques: card, button, form, menu, header...

* elementos: icon, text, item, image, input, button...

* modificadores: active, big, right, secondary, res...

## Casos de uso:

- bloque
- bloque__elemento
- bloque--modificador
- elemento--modificador
- bloque__elemento--modificador

## Ejemplos:

```html
<button class="btn">¡Dale Click!</button>
<button class="btn btn--primary">Enviar</button>
<button class="btn btn--secondary">Cancelar</button>
```

```html
<nav class="navbar">
<a href="#" class="navbar__link">Inicio</a>
<a href="#" class="navbar__link navbar__link--active">Servicios</a>
<a href="#" class="navbar__link">Contacto</a>
</nav>
```

```html
<ul class="list">
<li class="list__item">Elemento 1</li>
<li class="list__item">Elemento 2</li>
<li class="list__item list__item--highlighted">¡Elemento 3 es el mejor!</li>
</ul>
```
