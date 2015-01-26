# handlebars-helper
A lightweight helper component to make it super easy to use handlebars templates in a re-usable manner across different pages.

Instead of defining script tags inline in your HTML to define templates you can instead write "template files" which will be bought in using AJAX only when required.

Even better, these are then cached in the JS layer so any subsequent calls do not result in further fetches.

## Example... Before (without this helper)...

Previously a handlebars template would look something like this:

```html
<div>Blah blah blah</div>
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
<div id="outputHere"></div>
<script src="js/handlebars.js"></script>
<script src="js/exampleUsage.js"></script>
```

And then some JavaScript to actually render it would be something like this:
```javascript
  var source   = document.getElementById('entry-template').innerHTML;
  var template = Handlebars.compile(source);
  var out = template ({title: "Hello", body: "This is a lot of work"});
  document.getElementById('outputHere').innerHTML = out;
```

## Example... After (with this helper)...

Using HandlebarsHelper, we can now simplify this to:

```html
<div>Blah blah blah</div>
<div id="outputHere"></div>
<script src="js/handlebars.js"></script>
<script src="js/handlebarsHelper.js"></script>
<script src="js/exampleUsage.js"></script>
```

And then some JavaScript to actually render it would be something like this:
```javascript
  var jsonData = {
    title: 'Hello',
    body: 'This is much simpler!'
  };
  handlebarsHelper.populateTemplate('outputHere', 'templates/page.template', jsonData);
```

## Advantages

1. Enables easy reuse of templates across multiple files.
2. Keeps the HTML simpler and less "messy".

## Disadvantages

1. Requires one server side fetch for each template file you create if you use it on a page.


