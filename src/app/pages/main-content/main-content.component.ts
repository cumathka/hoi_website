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
      title: 'Informationen',
      route: '/language',
      icon: 'https://c.animaapp.com/m939jagjfdOBIu/img/union-8.svg',
    },
    {
      title: 'Lernen',
      route: '/work',
      icon: 'https://c.animaapp.com/m939jagjfdOBIu/img/union-23.svg',
    },
    {
      title: 'Jobs',
      route: '/life',
      icon: 'https://c.animaapp.com/m939jagjfdOBIu/img/union-11.svg',
    },
    {
      title: 'Events',
      route: '/events',
      icon: 'https://c.animaapp.com/m939jagjfdOBIu/img/union-10.svg',
    },
  ];
}
