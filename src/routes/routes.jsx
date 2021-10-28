import HomePage from '../layouts/homePage'
import BrastlewarkPage from '../layouts/brastlewarkPage'
import OrcCity from '../layouts/orcCity'

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
    },
    {
        title: 'brastlewarkPage',
        path: '/orcCity',
        component: OrcCity
    }
]

// Used to create the menu on homePage
export const secondRoutes =  [
    {
        title: 'Ogrimar',
        path: '/orcCity',
        component: OrcCity,
        image: orc,
    },
    {
        title: 'BrastlewarkPage',
        path: '/brastlewark',
        component: BrastlewarkPage,
        image: gnome
    },
    {
        title: 'Durotar',
        path: '/orcCity',
        component: OrcCity,
        image: orc
    }
]