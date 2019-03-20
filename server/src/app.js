import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import send from 'koa-send';
import session from 'koa-session';
import passport from 'koa-passport';

import {port} from './config';
import indexRoute from './routes';
import './database';
import './auth';

const app = new Koa();
app.keys = [process.env.SESSION_KEY];

app.use(session(app));

app.use(bodyParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(koaStatic('dist'));

app.use(indexRoute.routes()).use(indexRoute.allowedMethods());

app.use(async ctx => {
  await send(ctx, 'dist/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
