import { Component, OnInit, OnDestroy, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { LanguageService } from '../../../services/language.service'
interface NavLink {
  key: string
  href: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false
  isMobileMenuOpen = false

  navLinks: NavLink[] = [
    { key: 'NAV.HOME',     href: '/' },
    { key: 'NAV.SERVICES', href: '#services' },
    { key: 'NAV.ABOUT',    href: '#valeurs' },
    { key: 'NAV.PRODUCTS', href: '#produits' },
  ]

  constructor(public languageService: LanguageService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 10
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false
  }
}