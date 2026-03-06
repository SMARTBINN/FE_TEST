import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-waste-collection',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './waste-collection.component.html',
  styleUrl: './waste-collection.component.css'
})
export class WasteCollectionComponent {}