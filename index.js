const _ = require('lodash');


// The below block of code adds methods for each of the letters [A-z] to _
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

// The below block of code adds a `_.str` method. The method recieves one or more
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

