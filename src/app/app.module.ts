import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParallaxeComponent } from './parallaxe/parallaxe.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
>>>>>>> 6695e3f88d555bee3522caca3c57f716acecb308

@NgModule({
  declarations: [
    AppComponent,
    ParallaxeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
