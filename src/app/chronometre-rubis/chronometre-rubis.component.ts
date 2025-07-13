import { Rubis3D } from '../../rubis3D';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chronometre-rubis',
  standalone: true,
  imports: [],
  templateUrl: './chronometre-rubis.component.html',
  styleUrl: './chronometre-rubis.component.css',
})
export class ChronometreRubisComponent {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const containerElements =
      this.elementRef.nativeElement.querySelectorAll('.threejs-container');

    containerElements.forEach((container: HTMLElement, index: number) => {
      const rubis3D = new Rubis3D(container);
      rubis3D.init();
    });
  }
}
