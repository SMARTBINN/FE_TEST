import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { ProductsComponent } from './components/sections/products/products.component';
import { WasteCollectionComponent } from './components/sections/waste-collection/waste-collection.component';
import { MonitoringComponent } from './components/sections/monitoring/monitoring.component';
import { AnalyseComponent } from './components/sections/analyse/analyse.component';
import { StatsComponent } from './components/sections/stats/stats.component';
import { ValuesComponent } from './components/sections/values/values.component';
import { PartnersComponent } from './components/sections/partners/partners.component';
import { ContactComponent } from './components/sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule, NavbarComponent, HeroComponent, ServicesComponent,
    ProductsComponent, WasteCollectionComponent, MonitoringComponent,
    AnalyseComponent, StatsComponent, ValuesComponent, PartnersComponent, ContactComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}