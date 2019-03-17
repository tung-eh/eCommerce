import Router from 'koa-router';
import productRoutes from './products';
import categoryRoutes from './categories';

const router = new Router({prefix: '/api'});

router.get('/health', ctx => (ctx.body = 'OK'));
router.use('', productRoutes.routes());
router.use('', categoryRoutes.routes());

export default router;
