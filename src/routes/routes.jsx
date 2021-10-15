import HomePage from '../layouts/homePage'
import BrastlewarkPage from '../layouts/brastlewarkPage'

import gnome from '../assets/gnome.png' 
import orc from '../assets/orc.png' 

// list of routes used in app.jsx
export const routes = [ 
    {
        title: 'homePage',
        path: '/',
        component: HomePage
    },
    {
        title: 'brastlewarkPage',
        path: '/brastlewark',
        component: BrastlewarkPage
    }
]

// Used to create the menu on homePage
export const secondRoutes =  [
    {
        title: 'Ogrimar',
        path: '',
        component: '',
        image: orc
    },
    {
        title: 'BrastlewarkPage',
        path: '/brastlewark',
        component: BrastlewarkPage,
        image: gnome
    },
    {
        title: 'Durotar',
        path: '',
        component: '',
        image: orc
    }
]