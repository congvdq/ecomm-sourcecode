import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { DetailComponent } from './detail/detail.component';
import { LinhtinhComponent } from './linhtinh/linhtinh.component';
import { SignupComponent } from './signup/signup.component';
import { BookService } from './book.service'



@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    DetailComponent,
    LinhtinhComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
