import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandComponent } from './components/band/band.component';
import { HomeComponent } from './components/home/home.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SearchBandComponent } from './components/search-band/search-band.component';

// Services - providers
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BandService } from './services/band.service';

// routes
import { app_routing } from './app.routes'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    UsersComponent,
    UserComponent,
    BandsComponent,
    BandComponent,
    HomeComponent,
    SearchUserComponent,
    SearchBandComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, UserService, BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
