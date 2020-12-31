import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from '../app/body/body.component';
import{ BlogListComponent } from '../app/body/blogList/blogList.component';
import{ BlogComponent } from '../app/body/blogList/blog/blog.component';

import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'blogs', component: BlogListComponent},
  {path: 'blogs/:id', component: BlogComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
