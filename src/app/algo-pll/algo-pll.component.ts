import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rubis3D } from '../../rubis3D';
import { Router } from '@angular/router';
@Component({
  selector: 'app-algo-pll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algo-pll.component.html',
  styleUrl: '../css/algocss.component.css',
})
export class AlgoPLLComponent {
  containers = Array.from({ length: 41 });
  private rubis3DInstances: Rubis3D[] = [];

  constructor(private router: Router, private elementRef: ElementRef) {}

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
  }

  voirPlus(index: number): void {
    //alert('Voir plus de contenu à venir !');
    this.router.navigate(['AlgoPlus/', index]);
  }
}
