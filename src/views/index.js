import Loadable from 'react-loadable'
import { Loading } from '../components'


const Application = Loadable({
    loader: () => import('./Application'),
    loading: Loading
})

const Edition = Loadable({
    loader: () => import('./Application/Edition'),
    loading: Loading
})

const Explain = Loadable({
    loader: () => import('./Application/Explain'),
    loading: Loading
})

const Backstage = Loadable({
    loader: () => import('./Backstage'),
    loading: Loading
})

const Business = Loadable({
    loader: () => import('./Business'),
    loading: Loading
})

const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading
})

const Recovery = Loadable({
    loader: () => import('./Recovery'),
    loading: Loading
})

const Share = Loadable({
    loader: () => import('./Share'),
    loading: Loading
})

const Users = Loadable({
    loader: () => import('./Users'),
    loading: Loading
})

const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})

export {
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
}