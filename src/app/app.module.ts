import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './views/home/home.component';
import {ComponentsComponent} from './views/components/components.component';
import {AboutComponent} from './views/about/about.component';
import {CounterComponent} from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
