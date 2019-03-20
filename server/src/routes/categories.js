import Router from 'koa-router';
import Category from '../models/category';
import {to} from '../utils';

const router = new Router({
  prefix: '/categories',
});

router.get('/', async (ctx, next) => {
  ctx.body = await Category.find();
});

router.post('/', async (ctx, next) => {
  const [err, category] = await to(new Category(ctx.request.body).save());
  if (err) ctx.throw(422);
  ctx.status = 201;
  ctx.body = category;
});

router.get('/:id', async (ctx, next) => {
  await next();
  ctx.body = ctx.state.category;
});

router.put('/:id', async (ctx, next) => {
  await next();
  ctx.state.category.set(ctx.request.body);
  const [err, category] = await to(ctx.state.category.save());
  if (err) ctx.throw(422);
  ctx.body = category;
});

router.delete('/:id', async (ctx, next) => {
  await next();
  const [err] = await to(ctx.state.category.remove());
  ctx.body = 'Removed';
});

router.all('/:id', async (ctx, next) => {
  const [err, category] = await to(Category.findById(ctx.params.id));
  if (err) ctx.throw(404);
  ctx.state.category = category;
});

export default router;
