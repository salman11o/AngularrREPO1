
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodocompComponent } from './todocomp/todocomp.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { AdditemComponent } from './additem/additem.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TodocompComponent,
    TodoitemsComponent,
    AdditemComponent
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
