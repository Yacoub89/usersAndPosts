import { SharedModule } from './shared/shared.module';
import { PostService } from './posts/post.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { usersRouting } from './users/users.routing';
import { UserFormComponent } from './users/user-form.component';
import { UserService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    usersRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [UserService, PreventUnsavedChangesGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
