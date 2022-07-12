import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './AuthModule/login/login.component';
import { FeedComponent } from './Components/feed/feed.component';
import { UserSettingsComponent } from './UserModule/user-settings/user-settings.component';
import { UserProfileComponent } from './UserModule/user-profile/user-profile.component';
import { UserCollectionsComponent } from './UserModule/user-collections/user-collections.component';
import { UserPreferencesComponent } from './UserModule/user-preferences/user-preferences.component';
import { CollectionDetailsComponent } from './UserModule/collection-details/collection-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile/collections/:collectionName',
    component: CollectionDetailsComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    children: [
      { path: 'collections', component: UserCollectionsComponent },
      { path: 'preferences', component: UserPreferencesComponent },
      { path: 'setting', component: UserSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
