import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  constructor(
    private router: Router
  ) // private authService: AuthService, // private router: Router, // private http: HttpClient
  {}

  onSubmit() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/profil']);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
