import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    { val: 'STATS.S1_VAL', unit: 'STATS.S1_UNIT', desc: 'STATS.S1_DESC', icon: 'trash',  color: 'text-red-500'    },
    { val: 'STATS.S2_VAL', unit: 'STATS.S2_UNIT', desc: 'STATS.S2_DESC', icon: 'water',  color: 'text-blue-500'   },
    { val: 'STATS.S3_VAL', unit: 'STATS.S3_UNIT', desc: 'STATS.S3_DESC', icon: 'person', color: 'text-orange-500' },
    { val: 'STATS.S4_VAL', unit: 'STATS.S4_UNIT', desc: 'STATS.S4_DESC', icon: 'money',  color: 'text-green-500'  },
    { val: 'STATS.S5_VAL', unit: 'STATS.S5_UNIT', desc: 'STATS.S5_DESC', icon: 'chart',  color: 'text-yellow-500' },
    { val: 'STATS.S6_VAL', unit: 'STATS.S6_UNIT', desc: 'STATS.S6_DESC', icon: 'co2',    color: 'text-purple-500' },
  ];
}