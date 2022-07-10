import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { FeedComponent } from './Components/feed/feed.component';
/* import auth*/
import {AuthModule} from './AuthModule/auth.module';
import{UserModule} from './UserModule/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,   
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
