import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private rotateInterval: ReturnType<typeof setInterval> | null = null;
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
    { lang: 'sw', text: 'Kushiriki njia na maarifa pamoja' },
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

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit() {
    // Run the interval outside Angular zone to avoid extra change detection cycles.
    this.ngZone.runOutsideAngular(() => {
      this.rotateInterval = setInterval(() => {
        // Re-enter Angular zone for change detection only when updating the UI.
        this.ngZone.run(() => {
          this.rotateText();
          this.cdr.detectChanges();
        });
      }, 1500);
    });
  }

  ngOnDestroy() {
    if (this.rotateInterval) {
      clearInterval(this.rotateInterval);
      this.rotateInterval = null;
    }
  }

  rotateText() {
    this.currentIndex = (this.currentIndex + 1) % this.translations.length;
  }
}
