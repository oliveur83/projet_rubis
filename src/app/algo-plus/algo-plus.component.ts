import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rubis3D } from '../../rubis3D';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-algo-plus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algo-plus.component.html',
  styleUrl: './algo-plus.component.css',
})
export class AlgoPlusComponent {
  index!: number;
  algorithms = [
    { rank: 1, name: 'Algorithme A', creator: 'Créateur X', likes: 150 },
    { rank: 2, name: 'Algorithme B', creator: 'Créateur Y', likes: 120 },
    { rank: 3, name: 'Algorithme C', creator: 'Créateur Z', likes: 100 },
    { rank: 4, name: 'Algorithme D', creator: 'Créateur W', likes: 90 },
    { rank: 5, name: 'Algorithme E', creator: 'Créateur V', likes: 85 },
    { rank: 6, name: 'Algorithme F', creator: 'Créateur U', likes: 80 },
    { rank: 7, name: 'Algorithme G', creator: 'Créateur T', likes: 75 },
    { rank: 8, name: 'Algorithme H', creator: 'Créateur S', likes: 70 },
    { rank: 9, name: 'Algorithme I', creator: 'Créateur R', likes: 65 },
    { rank: 10, name: 'Algorithme J', creator: 'Créateur Q', likes: 60 },
  ];
  estconnecter = this.authService.estConnecte();
  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {
    const containerElements =
      this.elementRef.nativeElement.querySelectorAll('.threejs-container');

    containerElements.forEach((container: HTMLElement, index: number) => {
      const rubis3D = new Rubis3D(container);
      rubis3D.init();

      console.log(`Scène 3D initialisée pour le conteneur ${index + 1}`);
    });
  }
  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'index depuis l'URL
    console.log('Index reçu:', this.index);
  }
}
