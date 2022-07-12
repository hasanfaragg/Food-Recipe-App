import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FeedComponent } from './FeedModule/Components/feed/feed.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home' , component:HomeComponent , children:[
  {path:'feed' , component:FeedComponent}
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
