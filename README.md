# _.wtf

_.wtf is an esoteric and fun programming style based on lodash.js. A program written in _.wtf must abide by these rules:

- import lodash.js so that _ is in global scope
- the only characters allowed in the code are: _,.,(,) and the alphanumeric characters
- all alphanumeric characters must be part of a method or property name on the lodash object
- no JavaScript allowed other than method calls and property accessors on the lodash object
- no html or css allowed, except for two script tags: one to import lodash, and one for your _.wtf code

### a simple example

Take this simple javascript function to check if a string is a palindrome:

`const isPalindrome = str => str === str.split('').reverse().join('');`

Here is how it is written in _.wft:

`_.flow(_.over(_.identity,_.flow(_.partialRight(_.split, _.stubString()),_.reverse,_.partialRight(_.join, _.stubString()))),_.spread(_.eq))`

### inspirations

- [lodash](https://lodash.com/), the greatest JavaScript library of all time
- [jsfuck](http://www.jsfuck.com/), the "esoteric and educational programming style based on the atomic parts of JavaScript", which happens to be the greatest programming style of all time
- [You don't need lodash/underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore), a popular github repo that makes the egregious, absurdist claim that you don't need lodash/underscore. \_.wtf proves the opposite: you only need lodash

### benefits

Writing code in a _.wtf style allows you to eliminate everything other than lodash from your dependency tree. You don't have to worry about learning html or CSS syntax. Just learn lodash, import it, and you are good to go

## A more detailed explanation, and a js -> _.wtf converter, can be found at [lodash.wtf](https://lodash.wtf)

## Check [index.html](https://github.com/danjm/lodash.wtf/blob/main/index.html) to see how the entire lodash.wtf page was written in _.wtf

## The beginnings of this project can be seen in this just from 2017: https://gist.github.com/danjm/ddcc3bc8e4fdfdb5ae71f18a68b60e8a
