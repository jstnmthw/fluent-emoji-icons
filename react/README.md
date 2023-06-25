# FluentUI Emoji Icons

<p align="center">
  <a href="#" target="_blank">
    <img src="./assets/readme_banner.jpg" alt="FluentUI Emoji">
  </a>
</p>

<p>
    <a href="https://github.com/jstnmthw/fluentui-emoji-icons"><img src="https://img.shields.io/npm/v/@jstnmthw/react-fluentui-emoji" alt="Latest Release"></a>
    <a href="https://github.com/jstnmthw/fluentui-emoji-icons/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@jstnmthw/react-fluentui-emoji" alt="License"></a>
</p>

## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need from Microsoft's [FluentUI Emojis](https://github.com/microsoft/fluentui-emoji) and inline it directly into your HTML:

```html
<svg
  class="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>
```

## React

First, install `react-fluentui-emoji-slim` from npm:

```sh
npm install react-fluentui-emoji-slim
```

Now each icon can be imported individually as a React component:

```js
import { SmileyIcon } from 'react-fluentui-emoji-slim'

function MyComponent() {
  return (
    <div>
      <SmileyIcon className="h-6 w-6" />
      <p>...</p>
    </div>
  )
}
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

## License

This library is MIT licensed.
