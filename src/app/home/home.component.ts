import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  logout(){
    if(localStorage.getItem('token') && localStorage.getItem('userData')){
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    }
  }
}
