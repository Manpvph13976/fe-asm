import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { HomeComponent } from './page/home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjectComponent } from './page/project/project.component';
import { HomeAdminComponent } from './page/admin/home-admin/home-admin.component';
import { ProfileAdminComponent } from './page/admin/profile-admin/profile-admin.component';
import { ProfileEditComponent } from './page/admin/profile-edit/profile-edit.component';
import { PostAdminComponent } from './page/admin/post-admin/post-admin.component';
import { DashbroadComponent } from './page/admin/dashbroad/dashbroad.component';
import { PostEditComponent } from './page/admin/post-edit/post-edit.component';
import { PostAddComponent } from './page/admin/post-add/post-add.component';
import { DeatailComponent } from './page/deatail/deatail.component';
const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:id', component: DeatailComponent },

  {
    path: 'admin',
    component: DashbroadComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ProfileAdminComponent },
      { path: 'list/:id/update', component: ProfileEditComponent },
      { path: 'post', component: PostAdminComponent },
      { path: 'post/:id/update', component: PostEditComponent },
      { path: 'post/add', component: PostAddComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
