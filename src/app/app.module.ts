import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParallaxeComponent } from './parallaxe/parallaxe.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
