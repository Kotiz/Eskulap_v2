import {createRouter, createWebHistory} from 'vue-router'
import AboutUsManagement from '../pages/about-us(management)';
import Okulistyczna from '@/components/poradnie/Okulistyczna.vue'
import KardiologicznaVue from '@/components/poradnie/Kardiologiczna.vue';
import Urologiczna from '@/components/poradnie/Urologiczna.vue';
import Ginekologiczna from '@/components/poradnie/Ginekologiczna.vue';
import Ortopedyczna from '@/components/poradnie/Ortopedyczna.vue';
import Chirurgii from '@/components/poradnie/Chirurgii.vue';
import Radiologiczna from '@/components/poradnie/Radiologiczna.vue';
import MedycynyPracy from '@/components/poradnie/MedycynyPracy.vue';
import Reumatologiczna from '@/components/poradnie/Reumatologiczna.vue';
import Internistyczna from '@/components/poradnie/Internistyczna.vue';
import Dietetyczna from '@/components/poradnie/Dietetyczna.vue';
import Stomatologii from '@/components/poradnie/Stomatologii.vue';
import Ortodontyczna from '@/components/poradnie/Ortodontyczna.vue';
import NotFound from '../pages/404';


const routes = [
    {
        path: '/',
        name: ' AboutUsManagement',
        component:  AboutUsManagement,
        meta: {
            title: 'Home Default || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/okulistyczna',
        name: 'Okulistyczna',
        component:  Okulistyczna,
        meta: {
            title: 'Home Default || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/kardiologiczna',
        name: 'Kardiologiczna',
        component: KardiologicznaVue,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Kardiologiczna',
        },
    },
    {
        path: '/urologiczna',
        name: 'Urologiczna',
        component: Urologiczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Urologiczna',
        },
    },
    {
        path: '/ginekologiczna',
        name: 'Ginekologiczna',
        component: Ginekologiczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Ginekologiczna',
        },
    },
    {
        path: '/ortopedyczna',
        name: 'Ortopedyczna',
        component: Ortopedyczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Ortopedyczna',
        },
    },
    {
        path: '/chirurgii',
        name: 'Chirurgii',
        component: Chirurgii,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Chirurgii',
        },
    },
    {
        path: '/radiologiczna',
        name: 'Radiologiczna',
        component: Radiologiczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Radiologiczna',
        },
    },
    {
        path: '/MedycynyPracy',
        name: 'Medycyny Pracy',
        component: MedycynyPracy,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Medycyny Pracy',
        },
    },
    {
        path: '/reumatologiczna',
        name: 'Reumatologiczna',
        component: Reumatologiczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Reumatologiczna',
        },
    },
    {
        path: '/internistyczna',
        name: 'Internistyczna',
        component: Internistyczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Internistyczna',
        },
    },
    {
        path: '/Dietetyczna',
        name: 'Dietetyczna',
        component: Dietetyczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Dietetyczna',
        },
    },
    {
        path: '/stomatologii',
        name: 'Stomatologii',
        component: Stomatologii,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Stomatologii',
        },
    },
    {
        path: '/ortodontyczna',
        name: 'Ortodontyczna',
        component: Ortodontyczna,
        meta: {
            title: 'Eskulap - Oświęcim - Poradnia Ortodontyczna',
        },
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'Eskulap - Oświęcim - Page not found',
        },
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
