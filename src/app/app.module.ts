import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './page/signin/signin.component';
import { SignupComponent } from './page/signup/signup.component';
import { HomeComponent } from './page/home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjectComponent } from './page/project/project.component';
import { HomeAdminComponent } from './page/admin/home-admin/home-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostAdminComponent } from './page/admin/post-admin/post-admin.component';
import { PostEditComponent } from './page/admin/post-edit/post-edit.component';
import { PostAddComponent } from './page/admin/post-add/post-add.component';
import { ProfileAdminComponent } from './page/admin/profile-admin/profile-admin.component';
import { ProfileEditComponent } from './page/admin/profile-edit/profile-edit.component';
import { DashbroadComponent } from './page/admin/dashbroad/dashbroad.component';
import { DeatailComponent } from './page/deatail/deatail.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    ProjectComponent,
    HomeAdminComponent,
    HeaderComponent,
    FooterComponent,
    PostAdminComponent,
    PostEditComponent,
    PostAddComponent,
    ProfileAdminComponent,
    ProfileEditComponent,
    DashbroadComponent,
    DeatailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
