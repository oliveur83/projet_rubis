import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rubis3D } from '../../rubis3D';
import { algof2L } from '../constant';
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
    { sequence: "R U R' U'", creator: 'Olivier', likes: 120 },
    { sequence: "F R U R' U' F'", creator: 'Mathieu', likes: 200 },
    { sequence: "R U2 R2 U' R2 U' R2 U2 R", creator: 'Luc', likes: 180 },
  ];
  constructor(private route: ActivatedRoute, private elementRef: ElementRef) {}
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
