import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  error = false;
  loading = false;

  constructor(private router: Router) {}

  login(): void {
    this.loading = true;
    this.error = false;
    setTimeout(() => {
      if (this.credentials.username === 'admin' && this.credentials.password === 'bioloop') {
        localStorage.setItem('token', 'demo-token');
        this.router.navigate(['/dashboard']);
      } else {
        this.error = true;
        this.loading = false;
      }
    }, 800);
  }
}