import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rubis3D, ActionKey } from '../../rubis3D';
import { algoOLL } from '../constant';
@Component({
  selector: 'app-algo-oll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algo-oll.component.html',
  styleUrl: '../css/algocss.component.css',
})
export class AlgoOLLComponent {
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
    const sequence: ActionKey[][] = algoOLL.map((str) =>
      [...str].filter((c): c is ActionKey =>
        ['R', 'L', 'U', 'F', 'D', 'B', 'r', 'l', 'u', 'f', 'd', 'b'].includes(c)
      )
    );

    rubis3DInstance.Recuperation_liste(sequence[index]);
  }

  voirPlus(index: number): void {
    alert('Voir plus de contenu à venir !');
  }
}
