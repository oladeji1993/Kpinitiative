import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurPlansComponent } from './our-plans/our-plans.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurPlansComponent,
    ContactUsComponent,
    LoginComponent,
    SignUpComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
