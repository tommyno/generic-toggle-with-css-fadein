# Generic toggle with css fade in
Generic JS toggle, with ARIA support, using CSS to fade in content.

## Demo
https://tommyno.github.io/generic-toggle-with-css-fadein

## How to use
Example:
```
<a data-toggle="[data-target='content']">Show content</a>
<div data-target="content">
  <p>Hidden content</p>
</div>
```

Additional: 
* Use `data-text-swap="New text"` to change text when toggled. Example:
`<a data-toggle="[data-target='content']" data-text-swap="Hide content">Show content</a>`
* No need to think about ARIA. `aria-expanded` is automatically added and toggled on `data-target` element.
