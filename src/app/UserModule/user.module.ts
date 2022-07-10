import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserCollectionsComponent } from './user-collections/user-collections.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    UserPreferencesComponent,
    UserCollectionsComponent,
  ],
  imports: [CommonModule],
})
export class UserModule {}
