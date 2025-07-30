// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public jeSuisConnecte: boolean = false;

  constructor() {}

  connecter() {
    this.jeSuisConnecte = true;
  }

  deconnecter() {
    this.jeSuisConnecte = false;
  }

  estConnecte(): boolean {
    return this.jeSuisConnecte;
  }
}
