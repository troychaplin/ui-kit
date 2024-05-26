# Main Layout Component

The `<main>` tag represents the main content area of a document. The content inside the <main> tag should be unique to the document and should not contain other global elements such as navigation, asides, footers and more. There should be no more than one <main> tag used in a document.

## Props

The following props are available on the `Main` component:

- `children` - accepts children elements
- `maxWidth` - sets a max width class that applies to direct descendants
- `noProse` - removes the automatically applied Tailwind prose classes

## Example

```jsx
<Main maxWidth="5xl">
  <p>Add content elements here</p>
</Main>
```
