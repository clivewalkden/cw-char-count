# CW Charcount

[![Greenkeeper badge](https://badges.greenkeeper.io/clivewalkden/cw-char-count.svg)](https://greenkeeper.io/)

This script shows a visual counter next to the input field showing the number of characters remaining for the given field.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://bitbucket.org/clivewalkden/cwcharcount/raw/master/dist/jquery.cw-charcount.min.js
[max]: https://bitbucket.org/clivewalkden/cwcharcount/raw/development/src/cw-charcount.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/cw-charcount.min.js"></script>
<script>
$(function($) {
  $('input[maxlength]').CWCharCount();
});
</script>
```

## Documentation
For documentation please see [the website](https://clivewalkden.co.uk/code/cw_charcount/)

## Examples
For examples please see [the website](https://clivewalkden.co.uk/code/cw_charcount/)

## Release History
#### 0.3.1 - 17th March 2016
 * Updated unit tests
 * Updated links to Github instead of BitBucket
 * Updated files to latest versions
 * Added AMD compatibility to the plugin

#### 0.3.0 - 28th February 2014
 * Use grunt to process files
 * Added Bower support

#### 0.2.0 - 28th August 2013
 * Updated to include the data-control option

#### 0.1.0 - 6th November 2012
 * Created the first version of the script based on previous created scripts


## Credits

#### Maintainer

[Clive Walkden](https://clivewalkden.co.uk)
