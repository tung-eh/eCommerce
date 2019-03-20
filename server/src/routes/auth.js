import Router from 'koa-router';
import passport from 'koa-passport';
import User from '../models/user';
import {to} from '../utils';

const router = new Router({});

router.post('/signup', async (ctx, next) => {
  const [err, user] = await to(new User(ctx.request.body).save());
  if (err) {
    ctx.status = 422;
    ctx.body = err;
  } else {
    ctx.status = 201;
    ctx.body = user;
  }
});

router.post('/login', async (ctx, next) => {
  return passport.authenticate('local', async (err, user) => {
    if (user === false) {
      ctx.status = 401;
      ctx.body = {success: false};
    } else {
      ctx.login(user);
      ctx.body = {success: true};
    }
  })(ctx, next);
});

router.post('/logout', async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    ctx.logout();
    ctx.body = {success: true};
  } else {
    ctx.status = 401;
    ctx.body = {success: false};
  }
});

export default router;
