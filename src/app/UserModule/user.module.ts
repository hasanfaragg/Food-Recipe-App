import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserCollectionsComponent } from './user-collections/user-collections.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    UserPreferencesComponent,
    UserCollectionsComponent,
    UserProfileComponent,
    CollectionDetailsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class UserModule {}
