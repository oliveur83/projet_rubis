import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rubis3D } from '../rubis3D';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDropdownOpen = false;

  constructor(private router: Router, private elementRef: ElementRef) {}
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
  AlgoF2L() {
    this.router.navigate(['/AlgoF2l']);
  }
  AlgoPLL() {
    this.router.navigate(['/AlgoPLL']);
  }
  AlgoOLL() {
    this.router.navigate(['/AlgoOLL']);
  }
}
