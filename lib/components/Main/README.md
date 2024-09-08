# Main Layout Component

The `<main>` tag represents the main content area of a document. The content inside the `<main>` tag should be unique to the document and should not contain other global elements such as navigation, asides, footers and more. There should be no more than one `<main>` tag used in a document.

## Usage Example

```jsx
<Main>
  <p>Add content elements here</p>
</Main>
```

## Properties

The following props are available on the `Main` component:

| Prop     | Purpose                                                                  | Default | Options                                                                               |
| -------- | ------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------- |
| children | Accepts children elements                                                |         |                                                                                       |
| maxWidth | Sets a `ui-max-width-${propValue}` class that targets direct descendants | `md`    | `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `max`, `full` |
| noProse  | Removes the automatically applied Tailwind prose classes                 | `false` | `true`, `false`                                                                       |

## Additional Info

- Max width is applied to direct descendants rather than the main wrapper itself. This allows you to maintain a consistent width on all child elements without any additional work. However, there are times when you may want to allow a specific component to break out of this and set its own width. You can do this by adding a `ui-no-max-width` class to any child element of `Main`

## Resources

- `maxWidth`: each option available in this prop relates to the [max-width classes](https://tailwindcss.com/docs/max-width) provided by Tailwind CSS
- `noProse`: currently prose classes of `prose prose-lg md:prose-xl` from the [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin are applied by default
