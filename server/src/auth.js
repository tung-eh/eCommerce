import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';
import User from './models/user';
import {to} from './utils';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const [err, user] = await to(User.findById(id));
  done(err, user);
});

passport.use(
  new LocalStrategy(
    {usernameField: 'email', passwordField: 'password'},
    async (email, password, done) => {
      const [err, user] = await to(User.findOne({email}));
      if (err || !user) {
        done(err, user);
      } else {
        const isPasswordMatched = user.comparePassword(password);
        done(err, isPasswordMatched ? user : null);
      }
    },
  ),
);
