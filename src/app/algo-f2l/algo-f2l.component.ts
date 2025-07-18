import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rubis3D, ActionKey } from '../../rubis3D';
import { algof2L } from '../constant';
@Component({
  selector: 'app-algo-f2l',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algo-f2l.component.html',
  styleUrl: '../css/algocss.component.css',
})
export class AlgoF2lComponent {
  public algof2L = algof2L;
  containers = Array.from({ length: 41 });
  private rubis3DInstances: Rubis3D[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const containerElements =
      this.elementRef.nativeElement.querySelectorAll('.threejs-container');

    containerElements.forEach((container: HTMLElement, index: number) => {
      const rubis3D = new Rubis3D(container);
      rubis3D.init();
      this.rubis3DInstances[index] = rubis3D;
    });
  }

  playScene(index: number): void {
    const rubis3DInstance = this.rubis3DInstances[index];

    if (rubis3DInstance) {
      const sequence: ActionKey[][] = algof2L.map((str) => {
        const result: ActionKey[] = [];
        const clean = str.replace(/\s+/g, '').split('');

        for (let i = 0; i < clean.length; i++) {
          const char = clean[i];
          const next = clean[i + 1];

          if (next === "'") {
            result.push(char.toLowerCase() as ActionKey); // Prime move
            i++; // Skip the apostrophe
          } else if (['R', 'L', 'U', 'F', 'D', 'B'].includes(char)) {
            result.push(char as ActionKey);
          }
          // ignore everything else
        }

        return result;
      });

      rubis3DInstance.Recuperation_liste(sequence[index]);
    } else {
      console.error(
        `Aucune instance Rubis3D trouvée pour le conteneur ${index + 1}`
      );
    }
  }

  voirPlus(index: number): void {
    alert('Voir plus de contenu à venir !');
    console.log(`Voir Plus cliqué pour le conteneur ${index + 1}`);
  }
}
