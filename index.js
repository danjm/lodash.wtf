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

console.log(_.a())
console.log(_.R())