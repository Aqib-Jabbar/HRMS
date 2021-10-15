import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditProfileDataComponent } from './edit-profile-data/edit-profile-data.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileDataComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
   
  ]
})
export class ProfileModule { }
