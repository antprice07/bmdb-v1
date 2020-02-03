import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { ReportCreditComponent } from './reports/report-credit/report-credit.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "movies/list", component: MovieListComponent },
  { path: "movies/detail/:id", component: MovieDetailComponent },
  { path: "movies/edit/:id", component: MovieEditComponent },
  { path: "movies/create", component: MovieCreateComponent },
  { path: "actors/create", component: ActorCreateComponent },
  { path: "actors/list", component: ActorListComponent },
  { path: "actors/edit/:id", component: ActorEditComponent },
  { path: "actors/detail/:id", component: ActorDetailComponent },
  { path: "credits/edit/:id", component: CreditEditComponent },
  { path: "credits/detail/:id", component: CreditDetailComponent },
  { path: "credits/list", component: CreditListComponent },
  { path: "credits/create", component: CreditCreateComponent },
  { path: "credits/full-detail/:id", component: ReportCreditComponent },
  { path: "**", component: MovieListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
