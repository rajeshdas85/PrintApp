import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { UserDetailsComponent } from "src/app/user-details/user-details.component";
import { ProductuploadComponent } from "src/app/productupload/productupload.component";
import { ProductdetailsComponent } from "src/app/productdetails/productdetails.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'productupload', component: ProductuploadComponent, canActivate: [AuthGuard] },    
    { path: 'userDetails', component: UserDetailsComponent , canActivate: [AuthGuard]},
    { path: 'productDetails', component: ProductdetailsComponent , canActivate: [AuthGuard]},    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);