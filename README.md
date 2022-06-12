# vanilla-js-counter

This is a animated counter written in pure JavaScript.

## How to use it?

1. Include `main.js` file to your project:

```html
<script type="text/javascript" src="./main.js" defer></script>
```

2. Insert a counter in your html file. Example:

```html
<span data-name="counter" data-counter-end="15" data-counter-duration="1000">
  26
</span>
```

Instance of counter have to has a couple of `data` attributes:

- `data-name='counter'` - required as it is without changes,
- `data-counter-end='15'` - required, value have to be a number - positive or negative, in this example: 15,
- `data-counter-duration='1000'` - required, value have to be a positive, natural number. It means a duration of animation in milliseconds - in this example 1000.

## Live

[https://grzegorzpokorski.github.io/vanilla-js-counter/](https://grzegorzpokorski.github.io/vanilla-js-counter/)
