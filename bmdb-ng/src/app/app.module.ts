import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { HttpClientModule } from "@angular/common/http"
import { MovieService } from './service/movie.service';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { ReportCreditComponent } from './reports/report-credit/report-credit.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MenuComponent,
    ActorListComponent,
    ActorEditComponent,
    ActorDetailComponent,
    ActorCreateComponent,
    CreditListComponent,
    CreditDetailComponent,
    CreditEditComponent,
    CreditCreateComponent,
    ReportCreditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
