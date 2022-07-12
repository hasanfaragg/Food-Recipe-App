import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
/*imports*/
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from './SharedModule/shared.module';

/* import auth*/
import { AuthModule } from './AuthModule/auth.module';
import { UserModule } from './UserModule/user.module';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { FeedModule } from './FeedModule/feed.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
=======
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
>>>>>>> 6075a4ed9ab5957056518b9e11d5beea4779ffec
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    /* shared*/
    SharedModule,
    FeedModule,
    AuthModule,
    SocialLoginModule,
    UserModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('clientId'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
    AuthModule,   
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 6075a4ed9ab5957056518b9e11d5beea4779ffec
