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

_.logStr(_.t,_.e,_.s,_.t)