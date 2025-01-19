import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-algodebutant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './algodebutant.component.html',
  styleUrl: './algodebutant.component.css',
})
export class AlgodebutantComponent {
  steps = [
    {
      title: 'Comprendre le cube',
      description:
        'Familiarisez-vous avec les faces, les couleurs et les mouvements de base.',
      image: 'assets/mouvement.png',
      image2: '',
    },
    {
      title: 'Faire la croix blanche',
      description: 'Apprenez à résoudre la croix blanche sur une face.',
      image: 'assets/croix_blanche.jpg',
      image2: 'assets/croix_blanche2.jpg',
    },
    {
      title: 'Résoudre les coins blancs',
      description:
        'Positionnez les coins blancs pour compléter la première face.',
      image: 'assets/coin_blanc.jpg',
      image2: '',
    },
    {
      title: 'Résoudre la deuxième couronne',
      description: 'Placez correctement les arêtes du milieu.',
      image: 'assets/deuxieme_couronne.jpg',
      image2: '',
    },
    {
      title: 'Faire la croix jaune',
      description: 'Créez une croix sur la face jaune.',
      image: 'assets/croix_jaune.png',
      image2: '',
    },
    {
      title: 'Positionner les arete jaunes',
      description:
        'Ajustez les coins jaunes pour finaliser la face supérieure.',
      image: 'assets/deplacement_arete_jaune.jpg',
      image2: '',
    },
    {
      title: 'Aligner les arêtes',
      description: 'Terminez le cube en alignant les arêtes restantes.',
      image: 'assets/deplacement_de_coin.jpg',
      image2: '',
    },
    {
      title: 'Positionner les coins jaunes',
      description:
        'Ajustez les coins jaunes pour finaliser la face supérieure.',
      image: 'assets/deplacement_de_coin.jpg',
      image2: '',
    },
    {
      title: 'orienté les coin jaune ',
      description: 'Terminez le cube en alignant les arêtes restantes.',
      image: 'assets/orientation_coin_jaune .jpg',
      image2: '',
    },
  ];

  selectedStep: number = 0;

  selectStep(index: number): void {
    this.selectedStep = index;
  }

  previousStep(): void {
    if (this.selectedStep !== null && this.selectedStep > 0) {
      this.selectedStep--;
    }
  }

  nextStep(): void {
    if (
      this.selectedStep !== null &&
      this.selectedStep < this.steps.length - 1
    ) {
      this.selectedStep++;
    }
  }
}
