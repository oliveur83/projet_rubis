import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rubis3D } from '../rubis3D';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../app/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDropdownOpen = false;
  isConnected = this.authService.estConnecte();
  constructor(
    private router: Router,
    public authService: AuthService,
    private elementRef: ElementRef
  ) {}
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ismenu = false;

  menurubis() {
    this.ismenu = !this.ismenu;
  }
  title = 'front_rubis';

  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');

    const threeJSUtils = new Rubis3D(container);
    threeJSUtils.init();
  }
  toggleMenu() {
    this.ismenu = !this.ismenu;
  }

  Connexion() {
    console.log('bien dans la fonction ');
    this.router.navigate(['/Connexion']);
  }
  AlgoPLL() {
    this.router.navigate(['/AlgoPLL']);
  }
  AlgoF2L() {
    this.router.navigate(['/AlgoF2l']);
  }
  debutant() {
    this.router.navigate(['/Debutant']);
    console.log('toto');
  }

  AlgoOLL() {
    this.router.navigate(['/AlgoOLL']);
  }
  algoprofil() {
    this.router.navigate(['/AlgoProfil']);
  }
  Chrono() {
    this.router.navigate(['/Chrono']);
  }
  AlgoPLLblind() {
    this.router.navigate(['/AlgoPLL']);
  }
  AlgoF2Lblind() {
    this.router.navigate(['/AlgoF2l']);
  }
  debutantblind() {
    this.router.navigate(['/Debutant']);
    console.log('toto');
  }

  AlgoOLLblind() {
    this.router.navigate(['/AlgoOLL']);
  }
  goTo(event: string) {
    this.router.navigate([event]); // Exemple : /epreuve/3x3
  }
  activeSub: string | null = null;

  toggleSub(name: string) {
    this.activeSub = this.activeSub === name ? null : name;
  }
  Deconnexion() {
    this.authService.deconnecter();
  }
  ngOnInit() {
    // On s'abonne à l'état de connexion
    this.authService.estConnecte$.subscribe((etat) => {
      this.isConnected = etat;
    });
  }
}
