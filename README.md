JavaScript module to count unique colors of PNG image.

# Usage

```
const pngUniqueColors = require('png-unique-colors')
const colors = await pngUniqueColors('path/to/image.png') // buffer also available
// 79766
```

It is same as ImageMagick identify command output.

```
identify -verbose -unique path/to/image.png | grep Colors:
# Colors: 79766
```