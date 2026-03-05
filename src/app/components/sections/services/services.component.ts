import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services = [
    {
      key: 'S1',
      icon: 'trash',
      color: 'green',
      anchor: '#collecte',
      delay: '0ms'
    },
    {
      key: 'S2',
      icon: 'monitor',
      color: 'blue',
      anchor: '#monitoring',
      delay: '150ms'
    },
    {
      key: 'S3',
      icon: 'chart',
      color: 'purple',
      anchor: '#analyse',
      delay: '300ms'
    }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    setTimeout(() => {
      document.querySelectorAll('.service-card').forEach(el => observer.observe(el));
    }, 100);
  }
}