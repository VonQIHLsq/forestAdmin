import {
    Application,
    Backstage,
    Business,
    Home,
    Recovery,
    Share,
    Users,
    Login,
    NotFound,
    Edition,
    Explain
} from '../views'

export const mainRoutes = [{
    pathname: '/login',
    component: Login
}, {
    pathname: '/404',
    component: NotFound
}]

export const adminRoutes = [{
    pathname: '/admin/home',
    component: Home,
    title: '首页',
    icon: 'home',
    isNav: true
}, {
    pathname: '/admin/application',
    component: Application,
    title: '应用管理',
    icon: 'android',
    isNav: true,
    children: [
        {
            pathname: '/admin/application/edition',
            component: Edition,
            title: '版本管理'
        }, {
            pathname: '/admin/application/explain',
            component: Explain,
            title: '产品说明'
        }
    ]
}, {
    pathname: '/admin/backstage',
    component: Backstage,
    title: '后台管理',
    icon: 'setting',
    isNav: true
}, {
    pathname: '/admin/business',
    component: Business,
    title: '商家管理',
    icon: 'container',
    isNav: true
},  {
    pathname: '/admin/recovery',
    component: Recovery,
    title: '回收管理',
    icon: 'rest',
    isNav: true
}, {
    pathname: '/admin/share',
    component: Share,
    title: '共享管理',
    icon: 'appstore',
    isNav: true
}, {
    pathname: '/admin/users',
    component: Users,
    title: '用户管理',
    icon: 'contacts',
    isNav: true
}]