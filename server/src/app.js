import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import send from 'koa-send';

import {port} from './config';
import indexRoute from './routes';
import './database';

const app = new Koa();

app.use(bodyParser());

app.use(koaStatic('dist'));

app.use(indexRoute.routes()).use(indexRoute.allowedMethods());

app.use(async ctx => {
  await send(ctx, 'dist/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
