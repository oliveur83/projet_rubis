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
    },
    {
      title: 'Faire la croix blanche',
      description: 'Apprenez à résoudre la croix blanche sur une face.',
      image: 'assets/images/step2.png',
    },
    {
      title: 'Résoudre les coins blancs',
      description:
        'Positionnez les coins blancs pour compléter la première face.',
      image: 'assets/images/step3.png',
    },
    {
      title: 'Résoudre la deuxième couronne',
      description: 'Placez correctement les arêtes du milieu.',
      image: 'assets/images/step4.png',
    },
    {
      title: 'Faire la croix jaune',
      description: 'Créez une croix sur la face jaune.',
      image: 'assets/images/step5.png',
    },
    {
      title: 'Positionner les coins jaunes',
      description:
        'Ajustez les coins jaunes pour finaliser la face supérieure.',
      image: 'assets/images/step6.png',
    },
    {
      title: 'Aligner les arêtes',
      description: 'Terminez le cube en alignant les arêtes restantes.',
      image: 'assets/images/step7.png',
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
