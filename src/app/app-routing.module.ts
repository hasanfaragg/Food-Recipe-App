import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD
import { FeedComponent } from './FeedModule/Components/feed/feed.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home' , component:HomeComponent , children:[
  {path:'feed' , component:FeedComponent}
]},


=======
import { LoginComponent } from './AuthModule/login/login.component';
import { FeedComponent } from './Components/feed/feed.component';
import { UserSettingsComponent } from './UserModule/user-settings/user-settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'setting', component: UserSettingsComponent },
>>>>>>> 6075a4ed9ab5957056518b9e11d5beea4779ffec
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
