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

      let delay = 0;

      const sequence: ActionKey[][] = algof2L.map((str) =>
        [...str].filter((c): c is ActionKey =>
          ['R', 'L', 'U', 'F', 'D', 'B', 'r', 'l', 'u', 'f', 'd', 'b'].includes(
            c
          )
        )
      );

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
