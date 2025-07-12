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

// _.str
// Adds a `_.str` method. The method recieves one or more
// _ functions, concatenates the results of calling these without parameters, and
// then converts the concatenation to a number. When used in conjuction with the
// methods created in the previous code block, this allows for a convenient way
// to create strings. For example: `_.str(_.f,_.o,_.o) => 'foo'``
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

_.each(_.chunk(_.rest(_.identity)(
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
  _.str(_.s,_.p,_.a,_.c,_.e,), _.num(_._3,_._2)
), _._2()), _.unary(_.spread(
  _.overArgs(
    _.mixlo,
    _.concat(
      _.identity,
      _.flow(_.get(_.window(_.S,_.t,_.r,_.i,_.n,_.g), _.str(_.f,_.r,_.o,_.m,_.C,_.h,_.a,_.r,_.C,_.o,_.d,_.e)),_.constant)
    )
  )
)))


// Serving a simple webpage
// The below code is a simple Node.js web server, that serves a webpage with the text "Hello World"
// It is a lodashification of the example code found at https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
_.invoke(_.window(_.e,_.v,_.a,_.l)(_.str(_.i,_.m,_.p,_.o,_.r,_.t,_.leftParenthesis,_.quotationMark,_.h,_.t,_.t,_.p,_.quotationMark,_.rightParenthesis)), _.str(_.t,_.h,_.e,_.n), _.flow(
    _.method(
      _.str(_.c,_.r,_.e,_.a,_.t,_.e,_.S,_.e,_.r,_.v,_.e,_.r),
      _.flow(
        _.nthArg(_._1()),
        _.over(
          _.partialRight(_.set, _.str(_.s,_.t,_.a,_.t,_.u,_.s,_.C,_.o,_.d,_.e), _.num(_._2,_._0,_._0)),
          _.method(_.str(_.s,_.e,_.t,_.H,_.e,_.a,_.d,_.e,_.r), _.str(_.C,_.o,_.n,_.t,_.e,_.n,_.t,_.hyphen,_.T,_.y,_.p,_.e), _.str(_.t,_.e,_.x,_.t,_.forwardSlash,_.p,_.l,_.a,_.i,_.n)),
          _.method(_.str(_.e,_.n,_.d), _.str(_.H,_.e,_.l,_.l,_.o,_.space,_.W,_.o,_.r,_.l,_.d))
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