import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaComponent } from './components/india/india.component';
import { USAComponent } from './components/usa/usa.component';
import { UKComponent } from './components/uk/uk.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

const routes: Routes = [
  { path: 'update/:id', component: UpdateproductComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'usa', component: USAComponent },
  { path: 'uk', component: UKComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
