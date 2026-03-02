import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<'fr' | 'ar'>('fr');
  isRTL = signal<boolean>(false);

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'fr' ? 'ar' : 'fr';
    this.currentLang.set(newLang);
    this.isRTL.set(newLang === 'ar');
    this.translate.use(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  }
}