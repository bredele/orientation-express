# orientation-express

 [![NPM](https://img.shields.io/npm/v/orientation-express.svg)](https://www.npmjs.com/package/orientation-express)
 [![Downloads](https://img.shields.io/npm/dm/orientation-express.svg)](http://npm-stat.com/charts.html?package=orientation-express)
 [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Get the EXIF orientation of a file in a readable format (rotation degree) and correct the orientation of an image either you are on a mobile device or not.

## Usage


```js
const orientation = require('orientation-express')
orientation(file, (degree, base64) => {
  // set image src with base64 and rotation image with given degree value
})
```


## Installation

```shell
npm install orientation-express --save
```

[![NPM](https://nodei.co/npm/orientation-express.png)](https://nodei.co/npm/orientation-express/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Bluff is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any orientation-express related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
