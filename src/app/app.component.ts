import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rubis3D } from '../rubis3D';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ismenu = false;

  menurubis() {
    this.ismenu = !this.ismenu;
  }
  title = 'front_rubis';
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');

    const threeJSUtils = new Rubis3D(container);
    threeJSUtils.init();
  }
}
