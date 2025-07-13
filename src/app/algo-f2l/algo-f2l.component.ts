import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rubis3D } from '../../rubis3D';
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

      console.log(`Scène 3D initialisée pour le conteneur ${index + 1}`);
    });
  }

  playScene(index: number): void {
    const rubis3DInstance = this.rubis3DInstances[index];
    if (rubis3DInstance) {
      const actions: {
        [key in
          | 'R'
          | 'L'
          | 'U'
          | 'F'
          | 'D'
          | 'B'
          | 'r'
          | 'l'
          | 'u'
          | 'f'
          | 'd'
          | 'b']: () => void;
      } = {
        R: () => rubis3DInstance.configuration_rotation_R(false),
        L: () => rubis3DInstance.Configuration_Rotation_L(false),
        U: () => rubis3DInstance.Configuration_Rotation_U(false),
        F: () => rubis3DInstance.Configuration_Rotation_F(false),
        D: () => rubis3DInstance.Configuration_Rotation_D(false),
        B: () => rubis3DInstance.Configuration_Rotation_B(false),
        r: () => rubis3DInstance.configuration_rotation_R(true),
        l: () => rubis3DInstance.Configuration_Rotation_L(true),
        u: () => rubis3DInstance.Configuration_Rotation_U(true),
        f: () => rubis3DInstance.Configuration_Rotation_F(true),
        d: () => rubis3DInstance.Configuration_Rotation_D(true),
        b: () => rubis3DInstance.Configuration_Rotation_B(true),
      };

      if (index < 0 || index >= algof2L.length) {
        console.error(`Index ${index} hors limites pour algof2L.`);
        return;
      }
      const sequence = algof2L[index];
      let delay = 0;

      for (const char of sequence.split('').reverse()) {
        if (char in actions) {
          const invertedKey =
            char === char.toLowerCase()
              ? char.toUpperCase()
              : char.toLowerCase();

          setTimeout(() => {
            actions[invertedKey as keyof typeof actions]();
          }, delay);
          delay += 1000;
        }
      }
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
