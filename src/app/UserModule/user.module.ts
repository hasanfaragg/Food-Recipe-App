import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserCollectionsComponent } from './user-collections/user-collections.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    UserPreferencesComponent,
    UserCollectionsComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule],
})
export class UserModule {}
