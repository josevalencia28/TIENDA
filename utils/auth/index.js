const passport = require('passport');


const LocalStrategy = require('../auth/strategies/local.stratgeys');

passport.use(LocalStrategy)