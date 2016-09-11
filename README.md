# touch-t

This is a simple library for creating files with timestamps in the current working directory.

### Installation
``` npm install -g touch-t```

### Usage
Entering...
```
$ touch-t index.html
```
should create a file called something like `20160911173605_index.html`.
The timestamps are up to the second, so entering...
```
$ touch-t index.html app.js style.css
```
should create files that look as follows;
`20160911173605_1_index.html 20160911173605_2_app.js 20160911173605_3_style.css`

### License
MIT
