const _ = require('lodash');


// _.A to _.z
// Adds methods for each of the letters [A-z] to _
// The name of each method is a single upper or lower case letter, and each
// method returns a single character string, the letter of its method name.
// For example, _.a() => 'a', _.R() => 'R'

_.each(
  _.sortBy(
    _.flatMap(_.uniqBy(
      _.map(_.split(
        _.join(_.initial(_.keys(_)), _.stubString()),_.stubString()
      ), _.over(_.toLower, _.toUpper)),
      _.head
    ))
  ),
  _.flow(
    _.over(_.stubObject, _.identity, _.constant),
    _.spread(_.set),
    _.bind(_.mixin, _)
  )
);

// _.str
// Adds a `_.str` method. The method recieves one or more
// _ functions, and returns a concatenation of calling them without parameters. When
// used in conjuction with the methods created in the previous code block, this allows
// for a convenient way to create strings. For example: `_.str(_.f,_.o,_.o) => 'foo'``

_.mixin(
  _.set(_.stubObject, _.join(_.over(_.s,_.t,_.r)(), _.stubString()), _.flow(
    _.over,
    _.attempt,
    _.partialRight(_.join, _.stubString())
  ))
)

// _.mixlo
// A convenience method for adding mixins. It receives a string and a function
// and mixes in the new method to _
_.mixin(
  _.set(_.stubObject, _.str(_.m,_.i,_.x,_.l,_.o), _.flow(
    _.partial(_.set, _.stubObject()),
    _.bind(_.mixin, _)
  ))
)

// _.arrToStr
_.mixlo(
  _.str(_.a,_.r,_.r,_.T,_.o,_.S,_.t,_.r),
  _.partialRight(_.join, _.stubString())
)

// _.concatString
_.mixlo(
  _.str(_.c,_.o,_.n,_.c,_.a,_.t,_.S,_.t,_.r,_.i,_.n,_.g),
  _.flow(
    _.concat,
    _.arrToStr
  )
)

// _._0 to _._9
// Adds methods for each of numbers 0-9 to _.
// The name of each method is a an "_" followed by a single digit
// and each method returns that digit as a number.
// For example, _._0() => 0, _._7() => 7
_.each(
  _.range(_.toNumber(
    _.join(_.concat(
      _.toNumber(_.stubTrue()),
      _.toNumber(_.stubFalse())
    ), _.stubString())
  )),
  _.flow(
    _.unary(
      _.over(
        _.partial(_.concatString, _.head(_.keys(_.templateSettings.imports))),
        _.constant
      )
    ),
    _.spread(_.mixlo),
  )
)

// _.num
// Adds a `_.num` method. The method recieves one or more
// _ functions, concatenates the results of calling these without parameters, and
// then converts the concatenation to a number. When used in conjuction with the
// methods created in the previous code block, this allows for a convenient way
// to create multi digit numbers. For example: `_.num(_._1,_._2,_._3) => 123`
_.mixlo(
  _.str(_.n,_.u,_.m),
  _.flow(
    _.over,
    _.attempt,
    _.arrToStr,
    _.toNumber
  )
)

// _.window
// e.g. _.window(_.c,_.o,_.n,_.s,_.o,_.l,_.e) => window.console
_.mixlo(
  _.str(_.w,_.i,_.n,_.d,_.o,_.w),
  _.flow(
    _.str,
    _.partial(_.get, _.flow(_.mixin)(_))
  )
)

// _.consoleLog
_.mixlo(
  _.str(_.c,_.o,_.n,_.s,_.o,_.l,_.e,_.L,_.o,_.g),
  _.partial(
    _.invoke,
    _.window(_.c,_.o,_.n,_.s,_.o,_.l,_.e),
    _.str(_.l,_.o,_.g)
  )
)

// _.logStr
_.mixlo(
  _.str(_.l,_.o,_.g,_.S,_.t,_.r),
  _.flow(
    _.str,
    _.consoleLog
  )
)

// _.arr
// _.arr(_.stubTrue(), _.stubObject(), _.arr(_.arr(_._1()))) => [true, {}, [[1]]]
_.mixlo(
  _.str(_.a,_.r,_.r),
  _.rest(_.identity)
)

// Punctuation
// The below _.each call adds the following methods to _:
//// _.exclamationMrk
//// _.atSign
//// _.hash
//// _.dollarSign
//// _.percent
//// _.caret
//// _.ampersand
//// _.asterisk
//// _.leftParenthesis
//// _.rightParenthesis
//// _.hyphen
//// _.underscore
//// _.equalsSign
//// _.plusSign
//// _.leftBracket
//// _.rightBracket
//// _.leftBrace
//// _.rightBrace
//// _.backslash
//// _.pipe
//// _.semicolon
//// _.colon
//// _.quotationMark
//// _.apostrophe
//// _.comma
//// _.period
//// _.forwardSlash
//// _.lessThan
//// _.greaterThan
//// _.questionMark
//// _.backtick
//// _.tilde
//// _.space
// Each method, when called, returns a single character string corresponding to the method name.

_.each(_.chunk(_.arr(
  _.str(_.e,_.x,_.c,_.l,_.a,_.m,_.a,_.t,_.i,_.o,_.n,_.M,_.r,_.k,), _.num(_._3,_._3),
  _.str(_.a,_.t,_.S,_.i,_.g,_.n,), _.num(_._6,_._4),
  _.str(_.h,_.a,_.s,_.h,), _.num(_._3,_._5),
  _.str(_.d,_.o,_.l,_.l,_.a,_.r,_.S,_.i,_.g,_.n,), _.num(_._3,_._6),
  _.str(_.p,_.e,_.r,_.c,_.e,_.n,_.t,_.S,_.i,_.g,_.n,), _.num(_._3,_._7),
  _.str(_.c,_.a,_.r,_.e,_.t,), _.num(_._9,_._4),
  _.str(_.a,_.m,_.p,_.e,_.r,_.s,_.a,_.n,_.d,), _.num(_._3,_._8),
  _.str(_.a,_.s,_.t,_.e,_.r,_.i,_.s,_.k,), _.num(_._4,_._2),
  _.str(_.l,_.e,_.f,_.t,_.P,_.a,_.r,_.e,_.n,_.t,_.h,_.e,_.s,_.i,_.s,), _.num(_._4,_._0),
  _.str(_.r,_.i,_.g,_.h,_.t,_.P,_.a,_.r,_.e,_.n,_.t,_.h,_.e,_.s,_.i,_.s,), _.num(_._4,_._1),
  _.str(_.h,_.y,_.p,_.h,_.e,_.n,), _.num(_._4,_._5),
  _.str(_.u,_.n,_.d,_.e,_.r,_.s,_.c,_.o,_.r,_.e,), _.num(_._9,_._5),
  _.str(_.e,_.q,_.u,_.a,_.l,_.s,_.S,_.i,_.g,_.n,), _.num(_._6,_._1),
  _.str(_.p,_.l,_.u,_.s,_.S,_.i,_.g,_.n,), _.num(_._4,_._3),
  _.str(_.l,_.e,_.f,_.t,_.B,_.r,_.a,_.c,_.k,_.e,_.t,), _.num(_._9,_._1),
  _.str(_.r,_.i,_.g,_.h,_.t,_.B,_.r,_.a,_.c,_.k,_.e,_.t,), _.num(_._9,_._3),
  _.str(_.l,_.e,_.f,_.t,_.B,_.r,_.a,_.c,_.e,), _.num(_._1,_._2,_._3),
  _.str(_.r,_.i,_.g,_.h,_.t,_.B,_.r,_.a,_.c,_.e,), _.num(_._1,_._2,_._5),
  _.str(_.b,_.a,_.c,_.k,_.s,_.l,_.a,_.s,_.h,), _.num(_._9,_._2),
  _.str(_.p,_.i,_.p,_.e,), _.num(_._1,_._2,_._4),
  _.str(_.s,_.e,_.m,_.i,_.c,_.o,_.l,_.o,_.n,), _.num(_._5,_._9),
  _.str(_.c,_.o,_.l,_.o,_.n,), _.num(_._5,_._8),
  _.str(_.q,_.u,_.o,_.t,_.a,_.t,_.i,_.o,_.n,_.M,_.a,_.r,_.k,), _.num(_._3,_._4),
  _.str(_.a,_.p,_.o,_.s,_.t,_.r,_.o,_.p,_.h,_.e,), _.num(_._3,_._9),
  _.str(_.c,_.o,_.m,_.m,_.a,), _.num(_._4,_._4),
  _.str(_.p,_.e,_.r,_.i,_.o,_.d,), _.num(_._4,_._6),
  _.str(_.f,_.o,_.r,_.w,_.a,_.r,_.d,_.S,_.l,_.a,_.s,_.h,), _.num(_._4,_._7),
  _.str(_.l,_.e,_.s,_.s,_.T,_.h,_.a,_.n,), _.num(_._6,_._0),
  _.str(_.g,_.r,_.e,_.a,_.t,_.e,_.r,_.T,_.h,_.a,_.n,), _.num(_._6,_._2),
  _.str(_.q,_.u,_.e,_.s,_.t,_.i,_.o,_.n,_.M,_.a,_.r,_.k,), _.num(_._6,_._3),
  _.str(_.b,_.a,_.c,_.k,_.t,_.i,_.c,_.k,), _.num(_._9,_._6),
  _.str(_.t,_.i,_.l,_.d,_.e,), _.num(_._1,_._2,_._6),
  _.str(_.s,_.p,_.a,_.c,_.e,), _.num(_._3,_._2),
  _.str(_.n,_.e,_.w,_.L,_.i,_.n,_.e), _.num(_._1,_._0)
), _._2()), _.unary(_.spread(
  _.overArgs(
    _.mixlo,
    _.concat(
      _.identity,
      _.flow(_.get(_.window(_.S,_.t,_.r,_.i,_.n,_.g), _.str(_.f,_.r,_.o,_.m,_.C,_.h,_.a,_.r,_.C,_.o,_.d,_.e)),_.constant)
    )
  )
)))

// _.null
// _.null() => null
_.mixlo(
  _.str(_.n,_.u,_.l,_.l),
  _.constant(_.methodOf(_.stubString(), _.a())(_.str(_.m,_.a,_.t,_.c,_.h)))
)


// _.sum
// _.sum([1,2,3]) => 6
_.mixlo(
  _.str(_.s,_.u,_.m),
  _.flow(
    _.arr,
    _.partialRight(_.reduce,_.add)
  )
)


// _.interpolate
// Receives any number of parameters. Passed parameters should either be strings or null.
// Returns a function which will a concatenation of all the arguments original passed to _.interpolate,
// except that the nulls will be replace with the arguments to this function.
// _.interpolate(_.a(),_.null(),_.b())(_.z()) => 'azb'
// _.interpolate(_.null(),_.colon(),_.forwardSlash(),_.forwardSlash(),_.null(),_.period(),_.null(),_.forwardSlash(),_.null())(
//   _.str(_.h,_.t,_.t,_.p),
//   _.str(_.e,_.x,_.a,_.m,_.p,_.l,_.e),
//   _.str(_.c(),_.o(),_.m()),
//   _.str(_.t,_.e,_.s,_.t)
// ) => 'http://example.com/test``
_.mixlo(
  _.str(_.i,_.n,_.t,_.e,_.r,_.p,_.o,_.l,_.a,_.t,_.e),
  _.flow(
      _.arr,
      _.partialRight(_.map,_.unary(
        _.cond(_.arr(
          _.arr(_.isFunction, _.attempt),
          _.arr(_.isString, _.identity),
          _.arr(_.stubTrue, _.null),
        ))
      )),
      _.partialRight(_.wrap, _.rest(_.flip(_.cond(_.arr(
          _.arr(
            _.flow(
              _.overArgs(
                _.negate(_.isEqual),
                _.arr(
                  _.size,
                  _.flow(_.partialRight(_.filter, _.isNull), _.size),
                )
              )
            ),
            _.null
          ),
          _.arr(_.stubTrue,
            _.flow(
              _.over(
                _.nthArg(_._1()),
                _.flow(
                  _.over(
                    _.flow(
                      _.over(
                        _.constant(_.nthArg(_._1())),
                        _.rearg(_.unary(_.partial(_.partial, _.slice)), _._1()),
                        _.partial(_.partialRight, _.filter, _.isNull),
                        _.constant(_.size),
                        _.flow(_.size, _.partial(_.partial, _.subtract)),
                        _.flow(_.nthArg(_._0()),_.curry(_.get, _._2()))
                      ),
                      _.spread(_.flow),
                      _.partial(_.arr, _.isNull)
                    ),
                    _.null
                  ),
                  _.spread(_.overArgs(_.concat,_.arr(_.arr, _.constant(_.arr(_.arr(_.stubTrue, _.identity)))))),
                  _.cond
                )
              ),
              _.spread(_.map),
              _.partialRight(_.join, _.stubString())
            )
          )
        ))), _._1())
      )
    )
)

//_.html()
// Creates an HTML element as a formatted string with proper indentation.
// 
// _.html allow us to build html strings, similar to virtual DOM creation functions.
// 
// Params:
// // tag {string} - The HTML tag name (e.g., _.str(_.d,_.i,_.v), _.str(_.s,_.p,_.a,_.n), _.str(_.b,_.u,_.t,_.t,_.o,_.n))
// // attributes {Object|null} - Object mapping attribute names to values. Pass null if no attributes needed.
// //// Attributes with null values are skipped.
// // children {string|string[]|null} - Content inside the element. Can be a single string, array of strings,
// //// or null for empty elements.
// 
// @returns {string} A formatted HTML string with proper indentation
// 
// Example Simple element with text content
// _.html(_.p(), _.null(), _.str(_.apostrophe,_.H,_.e,_.l,_.l,_.o,_.space,_.W,_.o,_.r,_.l,_.d,_.apostrophe))
// // Returns: "<p>\n  Hello World\n</p>"
// 
// Example: Element with attributes
// _.html(
//  _.str(_.d,_.i,_.v),
//  _.set(
//    _.set(_.stubObject(), _.str(_.i,_.d), _.str(_.m,_.a,_.i,_.n)),
//    _.str(_.c,_.l,_.a,_.s,_.s),
//    _.str(_.c,_.o,_.n,_.t,_.a,_.i,_.n,_.e,_.r)
//  ),
//  _.str(_.C,_.o,_.n,_.t,_.e,_.n,_.t)
// )
// => "<div id=\"main\" class=\"container\">\n  Content\n</div>"
// 
// Example: Nested elements
// _.html(_.str(_.u,_.l), _.null(), _.arr(
//   _.html(_.str(_.l,_.i), _.null(), _.str(_.f,_.o,_.o)),
//   _.html(_.str(_.l,_.i), _.null(), _.str(_.b,_.a,_.r))
// ))
// => Returns properly indented nested HTML
_.mixlo(
  _.str(_.h,_.t,_.m,_.l),
  _.flow(
    _.over( 
      _.flow(
        _.over(
          _.ary(_.flow(
            _.over(
              _.partial(_.add, _.lessThan()),
              _.flow(
                _.nthArg(_._1()),
                _.entries,
                _.partialRight(_.map, _.unary(_.spread(_.interpolate(_.space(),_.null(),_.equalsSign(),_.quotationMark(),_.null(),_.quotationMark())))),
                _.partialRight(_.join, _.stubString())
              )
            ),
            _.partialRight(_.concat, _.greaterThan()),
            _.partialRight(_.join, '')
          ), _._2()),
          _.nthArg(_._0())
        ),
        _.flow(
          _.spread(_.over(
            _.flow(
              _.curry(_.rearg(_.interpolate(_.null(), _.newLine(),_.null(),_.newLine(),_.lessThan(),_.forwardSlash(),_.null(),_.greaterThan()), _.arr(_._0(), _._2(), _._1())), _._3()),
              _.partial(_.arr, _.identity)
            ),
            _.flow(
              _.constant(_.interpolate(_.null(), _.lessThan(),_.forwardSlash(),_.null(),_.greaterThan())),
              _.partial(_.arr, _.stubTrue)
            )
          )),
          _.cond
        ),
      ),
      _.flow(
        _.nthArg(_._2()),
        _.cond(_.arr(
          _.arr(_.overEvery(_.negate(_.isNil), _.isArray), _.flow(
              _.partialRight(_.map,_.flow(
                _.partialRight(_.split, _.newLine()),
                _.partialRight(_.map, _.unary(_.interpolate(_.space(), _.null()))),
                _.partialRight(_.join, _.newLine())
              )),
              _.partialRight(_.join, _.newLine())
            )),
          _.arr(_.overEvery(_.negate(_.isNil), _.negate(_.isArray)), _.flow(
                _.partialRight(_.split, _.newLine()),
                _.partialRight(_.map, _.unary(_.interpolate(_.space(), _.null()))),
                _.partialRight(_.join, _.newLine())
              )),
          _.arr(_.stubTrue, _.stubString)
        )),
        _.curryRight(_.attempt, _._2())
      )
    ),
    _.spread(_.flip(_.attempt))
  )
)


// _.objectToCSS
// Converts a JavaScript object of CSS styles into a formatted CSS string.
// 
// Takes an object where keys are CSS selectors and values are objects containing
// CSS properties and values. Automatically converts camelCase property names to
// kebab-case CSS property names and formats the output with proper indentation.
// 
// 
// example:
// const styles = {
//   body: {
//     fontFamily: 'Arial, sans-serif',
//     margin: '20px'
//   },
//   '.button': {
//     backgroundColor: 'blue',
//     borderRadius: '4px'
//   }
// };
// 
// _.objectToCSS(styles);
// // Returns:
// // body {
// //   font-family: Arial, sans-serif;
// //   margin: 20px;
// // }
// // .button {
// //   background-color: blue;
// //   border-radius: 4px;
// // }

_.mixlo(
  _.str(_.o,_.b,_.j,_.e,_.c,_.t,_.T,_.o,_.C,_.S,_.S),
  _.flow(
      _.partialRight(_.mapValues, _.flow(
        _.over(
          _.nthArg(_._1()),
          _.flow(
            _.nthArg(_._0()),
            _.partialRight(_.mapValues, _.flow(
              _.over(
                _.flow(_.nthArg(_._1()), _.partialRight(_.replace, _.window(_.R,_.e,_.g,_.E,_.x,_.p)(_.str(_.leftParenthesis,_.leftBracket,_.A,_.hyphen,_.Z,_.rightBracket,_.rightParenthesis), _.g()), _.str(_.hyphen,_.dollarSign,_._1)), _.toLower),
                _.nthArg(_._0())
              ),
              _.spread(_.interpolate(_.space(),_.space(),_.null(),_.colon(),_.space(),_.null(),_.semicolon()))
            )),
            _.values,
            _.partialRight(_.join, _.newLine())
          )
        ),
        _.spread(_.interpolate(_.null(),_.space(),_.leftBrace(),_.newLine(),_.null(),_.newLine(),_.rightBrace()))
      )),
      _.values,
      _.partialRight(_.join, _.newLine())
    )
)

// Serving a simple webpage
// The below code is a simple Node.js web server, that serves a webpage with the text "Hello World"
// It is a lodashification of the example code found at https://nodejs.org/en/learn/getting-started/introduction-to-nodejs, but
// instead of just serving the text "Hello world", it serves an html page that includes a 3 row, 2 column table. Each table contains
// a counter in one column and a button in the other column and clicking the button increases the respective counter.
_.invoke(_.window(_.e,_.v,_.a,_.l)(_.str(_.i,_.m,_.p,_.o,_.r,_.t,_.leftParenthesis,_.quotationMark,_.h,_.t,_.t,_.p,_.quotationMark,_.rightParenthesis)), _.str(_.t,_.h,_.e,_.n), _.flow(
    _.method(
      _.str(_.c,_.r,_.e,_.a,_.t,_.e,_.S,_.e,_.r,_.v,_.e,_.r),
      _.flow(
        _.nthArg(_._1()),
        _.over(
          _.partialRight(_.set, _.str(_.s,_.t,_.a,_.t,_.u,_.s,_.C,_.o,_.d,_.e), _.num(_._2,_._0,_._0)),
          _.method(_.str(_.s,_.e,_.t,_.H,_.e,_.a,_.d,_.e,_.r), _.str(_.C,_.o,_.n,_.t,_.e,_.n,_.t,_.hyphen,_.T,_.y,_.p,_.e), _.str(_.t,_.e,_.x,_.t,_.forwardSlash,_.h,_.t,_.m,_.l)),
          _.method(_.str(_.e,_.n,_.d), 
    _.interpolate(_.lessThan,_.exclamationMrk,_.D,_.O,_.C,_.T,_.Y,_.P,_.E,_.space,_.h,_.t,_.m,_.l,_.greaterThan,_.newLine(),_.null())
    (
      _.html(_.str(_.h,_.t,_.m,_.l), _.null(), _.arr(
        _.html(_.str(_.h,_.e,_.a,_.d), _.null(), _.arr(
          _.html(_.str(_.t,_.i,_.t,_.l,_.e), _.null(), _.str(_.C,_.o,_.u,_.n,_.t,_.e,_.r,_.space,_.T,_.a,_.b,_.l,_.e)),
          _.html(_.str(_.s,_.t,_.y,_.l,_.e), _.null(), _.objectToCSS(_.fromPairs(_.arr(
            _.arr(_.str(_.b,_.o,_.d,_.y), _.fromPairs(_.arr(
              _.arr(_.str(_.f,_.o,_.n,_.t,_.F,_.a,_.m,_.i,_.l,_.y), _.str(_.A,_.r,_.i,_.a,_.l,_.comma,_.space,_.s,_.a,_.n,_.s,_.hyphen,_.s,_.e,_.r,_.i,_.f)),
              _.arr(_.str(_.m,_.a,_.r,_.g,_.i,_.n), _.str(_._2,_._0,_.p,_.x)),
            ))),
            _.arr(_.str(_.t,_.a,_.b,_.l,_.e), _.fromPairs(_.arr(
              _.arr(_.str(_.b,_.o,_.r,_.d,_.e,_.r,_.C,_.o,_.l,_.l,_.a,_.p,_.s,_.e), _.str(_.c,_.o,_.l,_.l,_.a,_.p,_.s,_.e)),
              _.arr(_.str(_.m,_.a,_.r,_.g,_.i,_.n), _.str(_._2,_._0,_.p,_.x,_.space,_._0)),
            ))),
            _.arr(_.str(_.t,_.d), _.fromPairs(_.arr(
              _.arr(_.str(_.b,_.o,_.r,_.d,_.e,_.r), _.str(_._1,_.p,_.x,_.space,_.s,_.o,_.l,_.i,_.d,_.space,_.hash,_.c,_.c,_.c)),
              _.arr(_.str(_.p,_.a,_.d,_.d,_.i,_.n,_.g), _.str(_._1,_._0,_.p,_.x)),
              _.arr(_.str(_.t,_.e,_.x,_.t,_.A,_.l,_.i,_.g,_.n), _.str(_.c,_.e,_.n,_.t,_.e,_.r)),
            ))),
            _.arr(_.str(_.b,_.u,_.t,_.t,_.o,_.n), _.fromPairs(_.arr(
              _.arr(_.str(_.p,_.a,_.d,_.d,_.i,_.n,_.g), _.str(_._5,_.p,_.x,_.space,_._1,_._0,_.p,_.x)),
              _.arr(_.str(_.c,_.u,_.r,_.s,_.o,_.r), _.str(_.p,_.o,_.i,_.n,_.t,_.e,_.r)),
            )))
          ))))
        )),
        _.html(_.str(_.b,_.o,_.d,_.y), _.null(), _.arr(
          _.html(_.str(_.h,_._1), _.null(), _.str(_.C,_.o,_.u,_.n,_.t,_.e,_.r,_.space,_.T,_.a,_.b,_.l,_.e)),
          _.html(_.str(_.t,_.a,_.b,_.l,_.e), _.null(), _.arr(
            _.html(_.str(_.t,_.r), _.null(), _.arr(
              _.html(_.str(_.t,_.d), _.set(_.stubObject(), _.str(_.i,_.d), _.str(_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.hyphen,_._0) ), _.toString(_._0())),
              _.html(_.str(_.t,_.d), _.null(), _.html(_.str(_.b,_.u,_.t,_.t,_.o,_.n), _.set(_.stubObject(), _.str(_.o,_.n,_.c,_.l,_.i,_.c,_.k), _.str(_.i,_.n,_.c,_.r,_.e,_.m,_.e,_.n,_.t,_.leftParenthesis,_._0,_.rightParenthesis) ), _.str(_.plusSign,_._1)))
            )),
            _.html(_.str(_.t,_.r), _.null(), _.arr(
              _.html(_.str(_.t,_.d), _.set(_.stubObject(), _.str(_.i,_.d), _.str(_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.hyphen,_._1) ), _.toString(_._0())),
              _.html(_.str(_.t,_.d), _.null(), _.html(_.str(_.b,_.u,_.t,_.t,_.o,_.n), _.set(_.stubObject(), _.str(_.o,_.n,_.c,_.l,_.i,_.c,_.k), _.str(_.i,_.n,_.c,_.r,_.e,_.m,_.e,_.n,_.t,_.leftParenthesis,_._1,_.rightParenthesis) ), _.str(_.plusSign,_._1)))
            )),
            _.html(_.str(_.t,_.r), _.null(), _.arr(
              _.html(_.str(_.t,_.d), _.set(_.stubObject(), _.str(_.i,_.d), _.str(_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.hyphen,_._2) ), _.toString(_._0())),
              _.html(_.str(_.t,_.d), _.null(), _.html(_.str(_.b,_.u,_.t,_.t,_.o,_.n), _.set(_.stubObject(), _.str(_.o,_.n,_.c,_.l,_.i,_.c,_.k), _.str(_.i,_.n,_.c,_.r,_.e,_.m,_.e,_.n,_.t,_.leftParenthesis,_._2,_.rightParenthesis) ), _.str(_.plusSign,_._1)))
            ))
          )),
          _.stubString(),
          _.html(_.str(_.s,_.c,_.r,_.i,_.p,_.t), _.null(), _.str(_.l,_.e,_.t,_.space,_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.s,_.space,_.equalsSign,_.space,_.leftBracket,_._0,_.comma,_.space,_._0,_.comma,_.space,_._0,_.rightBracket,_.semicolon,_.f,_.u,_.n,_.c,_.t,_.i,_.o,_.n,_.space,_.i,_.n,_.c,_.r,_.e,_.m,_.e,_.n,_.t,_.leftParenthesis,_.i,_.n,_.d,_.e,_.x,_.rightParenthesis,_.space,_.leftBrace,_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.s,_.leftBracket,_.i,_.n,_.d,_.e,_.x,_.rightBracket,_.plusSign,_.plusSign,_.semicolon,_.d,_.o,_.c,_.u,_.m,_.e,_.n,_.t,_.period,_.g,_.e,_.t,_.E,_.l,_.e,_.m,_.e,_.n,_.t,_.B,_.y,_.I,_.d,_.leftParenthesis,_.apostrophe,_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.hyphen,_.apostrophe,_.space,_.plusSign,_.space,_.i,_.n,_.d,_.e,_.x,_.rightParenthesis,_.period,_.t,_.e,_.x,_.t,_.C,_.o,_.n,_.t,_.e,_.n,_.t,_.space,_.equalsSign,_.space,_.c,_.o,_.u,_.n,_.t,_.e,_.r,_.s,_.leftBracket,_.i,_.n,_.d,_.e,_.x,_.rightBracket,_.semicolon,_.rightBrace))
        ))
      ))
    )
  )
        )
      )
    ),
    _.method(
      _.str(_.l,_.i,_.s,_.t,_.e,_.n),
      _.num(_._3,_._0,_._0,_._0),
      _.str(_._1,_._2,_._7,_.period,_._0,_.period,_._0,_.period,_._1),
      _.flow(_.constant(_.str(_.S,_.e,_.r,_.v,_.e,_.r,_.space,_.r,_.u,_.n,_.n,_.i,_.n,_.g,_.space,_.a,_.t,_.space,_.h,_.t,_.t,_.p,_.colon,_.forwardSlash,_.forwardSlash,_._1,_._2,_._7,_.period,_._0,_.period,_._0,_.period,_._1,_.colon,_._3,_._0,_._0,_._0,_.forwardSlash)), _.consoleLog)
    )
  )
);
