import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InMemoryDatabaseService } from './in-memory-database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RequestService } from './request.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { httpInterceptorProviders } from './http-interceptors';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule,
    environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService) : [],
  StoreModule.forRoot({}),
  EffectsModule.forRoot(),
  StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }),
  AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule ],
  declarations: [ AppComponent, HelloComponent],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDatabaseService, RequestService, httpInterceptorProviders, AuthService]
})
export class AppModule { }
