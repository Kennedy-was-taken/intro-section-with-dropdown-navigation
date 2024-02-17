import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { MobileSlidebarComponent } from './mobile-slidebar/mobile-slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    MobileSlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
