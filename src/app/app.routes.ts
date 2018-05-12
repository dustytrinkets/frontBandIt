import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandComponent } from './components/band/band.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SearchBandComponent } from './components/search-band/search-band.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'bands', component: BandsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'band/:id', component: BandComponent },
    { path: 'search-user/:term', component: SearchUserComponent },
    { path: 'search-band/:term', component: SearchBandComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(APP_ROUTES);