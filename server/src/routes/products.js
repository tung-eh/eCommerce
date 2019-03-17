import Router from 'koa-router';
import Product from '../models/product';
import {to} from '../utils';

const router = new Router({
  prefix: '/products',
});

router.get('/', async (ctx, next) => {
  const [err, products] = await to(Product.find());
  if (err) ctx.throw(422, 'get products failed');
  ctx.body = products;
});

router.post('/', async (ctx, next) => {
  const [err, product] = await to(new Product(ctx.request.body).save());
  if (err) ctx.throw(422, 'create product failed', err);
  ctx.status = 201;
  ctx.body = product;
});

router.get('/:id', async (ctx, next) => {
  await next();
  ctx.body = ctx.state.product;
});

router.put('/:id', async (ctx, next) => {
  await next();
  ctx.state.product.set(ctx.request.body);
  const [err, product] = await to(ctx.state.product.save());
  if (err) ctx.throw(422, 'update product failed', err);
  ctx.body = product;
});

router.delete(':id', async (ctx, next) => {
  await next();
  const [err] = await to(ctx.state.product.remove());
  if (err) ctx.throw(422, 'delete product failed', err);
  ctx.body = 'Removed';
});

router.all('/:id', async (ctx, next) => {
  const [err, product] = await to(Product.findById(ctx.params.id));
  if (err) ctx.throw(404, 'product not found');
  ctx.state.product = product;
});

export default router;
