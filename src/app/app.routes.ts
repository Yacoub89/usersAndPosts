import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
  ,
  {
    path: 'posts',
    component: PostsComponent
  }
   ,
  {
    path: 'NotFound',
    component: NotFoundComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
