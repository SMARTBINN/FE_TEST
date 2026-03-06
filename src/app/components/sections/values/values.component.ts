import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent {}