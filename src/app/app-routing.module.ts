import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavComponent } from './fav/fav.component';

const routes: Routes =
[
  {
    path:'',
    component: AppComponent
  },
  {
    path:'fav',
    component: FavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
