import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-appointment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './appointment-modal.component.html',
})
export class AppointmentModalComponent {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  submitted = false;
  success = false;
  error = false;
  loading = false;

  appointment = { name: '', email: '', phone: '', date: '', message: '' };

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

  async submit(): Promise<void> {
    this.submitted = true;
    const { name, email, phone, date } = this.appointment;

    if (!name || !email || !phone || !date || !this.isValidEmail() || !this.isFutureDate()) return;

    this.loading = true;

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',    // ← remplace
        'YOUR_TEMPLATE_ID',   // ← remplace
        {
          name: this.appointment.name,
          email: this.appointment.email,
          phone: this.appointment.phone,
          date: this.appointment.date,
          message: this.appointment.message,
        },
        'YOUR_PUBLIC_KEY'     // ← remplace
      );
      this.success = true;
      this.error = false;
      this.appointment = { name: '', email: '', phone: '', date: '', message: '' };
      this.submitted = false;
      setTimeout(() => { this.success = false; this.close.emit(); }, 2000);
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
