import { Component } from '@angular/core';
import { SearchComponent } from '../flights/search/search.component';
import { SafeUrl } from '@angular/platform-browser';
import { GalleriaModule } from 'primeng/galleria';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'bip-home',
  imports: [SearchComponent, GalleriaModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly flightSlider: SafeUrl[] = ['sunset.webp', 'passport.png', 'aroundTheGlobe.webp', 'beach.webp', 'jordanie.webp'].map((slide) => `images/background/${slide}`);

}
