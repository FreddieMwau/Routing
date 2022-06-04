import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { authGuard } from './Services/auth-guard.service';
import { authService } from './Services/auth.service';
import { canDeactivateGuard } from './Services/can-deactivat-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [
    authService,
    authGuard,
    canDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
