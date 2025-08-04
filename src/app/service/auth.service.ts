import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private estConnecteSubject = new BehaviorSubject<boolean>(false);

  // Observable que les composants peuvent écouter
  estConnecte$ = this.estConnecteSubject.asObservable();

  connecter() {
    this.estConnecteSubject.next(true);
  }

  deconnecter() {
    this.estConnecteSubject.next(false);
  }

  estConnecte(): boolean {
    return this.estConnecteSubject.getValue();
  }
}
