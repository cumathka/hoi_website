import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class MainContentComponent {
  cards = [
    {
      title: 'Sprache',
      route: '/language',
      icon: '/assets/icons/language.png',
    },
    {
      title: 'Arbeit',
      route: '/work',
      icon: '/assets/icons/work.png',
    },
    {
      title: 'Leben',
      route: '/life',
      icon: '/assets/icons/life.png',
    },
    {
      title: 'Events',
      route: '/events',
      icon: '/assets/icons/events.png',
    },
  ];
}
