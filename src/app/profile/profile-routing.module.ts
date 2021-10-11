import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ActivateGuard} from '../auth/activate.guard'
import { EditProfileDataComponent } from './edit-profile-data/edit-profile-data.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', component: ProfileComponent , canActivate:[ActivateGuard]},
  {path:'editProfile/:id', component:EditProfileDataComponent},
  {path:'viewDetails/:id', component:ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
