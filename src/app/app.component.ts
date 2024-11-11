import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rubis3D } from '../rubis3D';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front_rubis';
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');

    const threeJSUtils = new Rubis3D(container);
    threeJSUtils.init();
  }
}
