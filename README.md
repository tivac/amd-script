# amd-script

Simple AMD `require` and `define` implementation designed to load from `<script>` tags that already exist on the page.

## Why?

Rollup's [`experimentalCodeSplitting`](https://rollupjs.org/guide/en#experimentalcodesplitting-experimentalcodesplitting) option supports chunking and AMD output, but outputs anonymous modules using filenames for dependencies. I couldn't find an AMD loader that handled that for the case where all the files are manually included in the right order using `<script>` tags, so here we are.

## Example

```html
<script src="amd-script.js"></script>
<script src="./common.js"></script>
<script src="./app.js"></script>
<script>
    require("./app.js");
</script>
```

## Usage w/ rollup

1. Set `experimentalCodeSplitting` to true.
1. Provide an array of files for `input`.
1. Set `output.format` to `"amd"` and let 'er rip.

For ease of writing your HTML & `<script>` includes you'll probably also want to set `output.chunkFileNames` to something like `"[name].js"` so they don't include a hash and keep changing.

## Prior Art

- [almond](https://github.com/requirejs/almond)
- [hazelnut](https://github.com/developit/hazelnut)
- [AMD Spec](https://github.com/amdjs/amdjs-api/)

## License

MIT
