import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent,
  children: [
    { 
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
      path: 'landing',
      component: LandingPageComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'Signup',
    component: SignUpComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
