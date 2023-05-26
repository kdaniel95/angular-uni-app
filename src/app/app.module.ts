import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { httpInterceptorProviders } from './http-interceptors';
import { InMemoryDatabaseService } from './in-memory-database.service';
import { RequestService } from './request.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService)
      : [],
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ AppComponent, LoginComponent, HomeComponent ],
  bootstrap: [AppComponent],
  providers: [
    InMemoryDatabaseService,
    RequestService,
    httpInterceptorProviders,
    AuthService,
  ],
})
export class AppModule {}
