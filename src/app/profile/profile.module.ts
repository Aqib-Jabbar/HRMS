import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { EditProfileDataComponent } from "./edit-profile-data/edit-profile-data.component";
import { ViewDetailsComponent } from "./view-details/view-details.component";

import { PostProfileComponent } from "./post-profile/post-profile.component";
import { ProgressBarDirective } from "./progress-bar.directive";
import { LoadComponent } from "./load/load.component";
import { ChildComponent } from './view-details/child/child.component';

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileDataComponent,
    ViewDetailsComponent,
    PostProfileComponent,
    ProgressBarDirective,
    LoadComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [ProgressBarDirective],
  bootstrap: [LoadComponent], // bootstrapped entry component
})
export class ProfileModule {}
