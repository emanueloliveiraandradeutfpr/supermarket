import { Component } from '@angular/core';
import { DeafultLoginLayoutComponent } from '../../../components/deafult-login-layout/deafult-login-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DeafultLoginLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
