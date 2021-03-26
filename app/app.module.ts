import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { IndiaComponent } from './components/india/india.component';
import { USAComponent } from './components/usa/usa.component';
import { UKComponent } from './components/uk/uk.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { CurrencyComponent } from './components/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    IndiaComponent,
    USAComponent,
    UKComponent,
    MainpageComponent,
    UpdateproductComponent,
    CurrencyComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
