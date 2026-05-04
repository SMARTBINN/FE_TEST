import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  showTeamModal = false;
  showDemoModal = false;
  submitted = false;
  success = false;
  error = false;
  loading = false;
  isDark = false;

  appointment = { name: '', email: '', phone: '', date: '', message: '' };

  teamMembers = [
    { name: 'Zakaria Taskri',             role: 'Chef De Projet',             photo: 'assets/images/team/zakaria.png',   linkedin: 'https://www.linkedin.com/in/zakaria-taskri-886a67179' },
    { name: 'Badreddine Tirgani',         role: 'Consultant Full Stack',             photo: 'assets/images/team/badreddine.png', linkedin: 'https://www.linkedin.com/in/tirgani-badreddine/' },
    { name: 'Yassine Nait abdellah',      role: 'Electrical Engineer',          photo: 'assets/images/team/yassine.png',   linkedin: 'https://www.linkedin.com/in/yassine-nait-abdellah-974a86206/' },
    { name: 'Wiam En najih',              role: 'Quality Engineer',             photo: 'assets/images/team/wiam.png',      linkedin: 'https://www.linkedin.com/in/wiam-en-najih-5b0469255/' },
    { name: 'Fatine Joaouad',             role: 'Waste Management Consultant',  photo: 'assets/images/team/fatine.png',     linkedin: 'https://www.linkedin.com/in/fatine-jaouad-376633121/' },
    { name: 'Mohammed Benabdellah',       role: 'Data Scientist',               photo: 'assets/images/team/mohammed.png',  linkedin: 'https://www.linkedin.com/in/mohammed-benabdallah1/' },
    { name: 'Ayoub El Hassani El Alaoui', role: 'Data Scientist & AI Engineer', photo: 'assets/images/team/ayoub.png',     linkedin: 'https://www.linkedin.com/in/ayoub-el-hassani-el-alaoui/' }
  ];

  constructor(public languageService: LanguageService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMobileMenu(): void { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu(): void { this.isMobileMenuOpen = false; }

  toggleDark(): void {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  openDemo(): void {
    this.showDemoModal = true;
    this.success = false;
    this.error = false;
    this.submitted = false;
    this.appointment = { name: '', email: '', phone: '', date: '', message: '' };
  }

  isFutureDate(): boolean {
    if (!this.appointment.date) return true;
    const selected = new Date(this.appointment.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }

  isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.appointment.email);
  }

  async submitDemo(): Promise<void> {
    this.submitted = true;
    const { name, email, phone, date } = this.appointment;
    if (!name || !email || !phone || !date || !this.isValidEmail() || !this.isFutureDate()) return;

    this.loading = true;
    try {
   await emailjs.send(
  'service_n2035hb',
  'template_m9o9syj',
  {
    from_name: this.appointment.name,
    name: this.appointment.name,
    email: this.appointment.email,
    phone: this.appointment.phone,
    date: this.appointment.date,
    message: this.appointment.message,
    to_email: 'support.valora.maroc@gmail.com',
    reply_to: this.appointment.email,
  },
  'eLUFuM7mf-G2HreNL'
);
      this.success = true;
      this.error = false;
      this.appointment = { name: '', email: '', phone: '', date: '', message: '' };
      this.submitted = false;
      setTimeout(() => { this.success = false; this.showDemoModal = false; }, 2500);
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
