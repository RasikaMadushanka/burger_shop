import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"order",
        component:OrderComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];
