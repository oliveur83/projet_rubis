import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css',
})
export class ProfilComponent {
  nomParticipant = 'John Doe';
  bioParticipant = 'Passionné de speedcubing depuis 5 ans.';

  records = [
    { categorie: '2x2', single: '1.23s', average: '2.15s' },
    { categorie: '3x3', single: '7.89s', average: '10.24s' },
    { categorie: '4x4', single: '45.67s', average: '50.89s' },
  ];

  classement = {
    national: '5ème',
    regional: '1er',
    mondial: '123ème',
  };

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const ctx = document.getElementById('progressChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        datasets: [
          {
            label: '3x3 Single',
            data: [15.4, 13.2, 12.5, 10.8, 9.7],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
          {
            label: '3x3 Moyenne',
            data: [17.5, 16.8, 14.9, 13.7, 12.4],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
