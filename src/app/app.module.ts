import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
