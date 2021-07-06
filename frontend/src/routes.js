import Home from './pages/Home'
import Product from './pages/Product'

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product,
        props: true,
    },
];