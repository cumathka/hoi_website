import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [CommonModule]
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  rotateInterval: any;
  translations = [
    { lang: 'tr', text: 'Yolu ve bilgiyi birlikte paylaşmak' },
    { lang: 'ar', text: 'مشاركة الطريق والمعرفة معا' },
    { lang: 'fa', text: 'به اشتراک گذاشتن راه ve دانش با یکدیگر' },
    { lang: 'ps', text: 'د لارې او پوهې شریکول' },
    { lang: 'ti', text: 'መንገድን ፍልጠትን ብሓባር ምክፋል' },
    { lang: 'so', text: 'Wadajir u wadaagista wadada iyo aqoonta' },
    { lang: 'ur', text: 'راستہ اور علم کا مشترکہ اشتراک' },
    { lang: 'ku', text: 'Rê û zanînê bi hev re parve bikin' },
    { lang: 'am', text: 'መንገድና እውቀትን በአንድነት መካፈል' },
    { lang: 'sw', text: 'Kushiriki njia na maarifa pamoja' }
  ];
  greetings = [
    { text: 'مرحبا', lang: 'Arabisch' },
    { text: 'Merhaba', lang: 'Türkisch' },
    { text: 'سلام', lang: 'Persisch' },
    { text: 'ሰላም', lang: 'Tigrinya' },
    { text: 'Здравствуйте', lang: 'Russisch' },
    { text: 'வணக்கம்', lang: 'Tamil' },
    { text: 'Përshëndetje', lang: 'Albanisch' },
    { text: 'नमस्ते', lang: 'Hindi' },
    { text: 'Zdravo', lang: 'Serbisch' },
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.rotateInterval = setInterval(() => {
        this.ngZone.run(() => this.rotateText());
      }, 1500);
    });
  }

  ngOnDestroy() {
    clearInterval(this.rotateInterval);
  }

  rotateText() {
    this.currentIndex = (this.currentIndex + 1) % this.translations.length;
  }
}
