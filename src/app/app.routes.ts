import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Properties } from './pages/properties/properties';
import { PropertyDetails } from './pages/property-details/property-details';
import { Sell } from './pages/sell/sell';
import { Agents } from './pages/agents/agents';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

    {
        path: '',
        component: Home
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'signup',
        component: Signup
    },

    {
        path: 'properties',
        component: Properties
    },

    {
        path: 'property/:id',
        component: PropertyDetails
    },

    {
        path: 'sell',
        component: Sell
    },

    {
    path: 'agents',
    component: Agents
},
    { path: '**', component: NotFound }

];