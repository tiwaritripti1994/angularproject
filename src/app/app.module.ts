import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreenodeComponent } from './treenode/treenode.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe } from './order-by.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TreenodeComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
