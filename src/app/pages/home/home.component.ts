import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar.component';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { ServicesComponent } from '../../components/sections/services/services.component';
import { ProductsComponent } from '../../components/sections/products/products.component';
import { WasteCollectionComponent } from '../../components/sections/waste-collection/waste-collection.component';
import { MonitoringComponent } from '../../components/sections/monitoring/monitoring.component';
import { AnalyseComponent } from '../../components/sections/analyse/analyse.component';
import { StatsComponent } from '../../components/sections/stats/stats.component';
import { ValuesComponent } from '../../components/sections/values/values.component';
import { PartnersComponent } from '../../components/sections/partners/partners.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';
import { TeamComponent } from '../../components/sections/team/team.component';
import { FooterComponent } from '../../components/sections/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterModule, TranslateModule,
    NavbarComponent, HeroComponent, ServicesComponent,
    ProductsComponent, WasteCollectionComponent, MonitoringComponent,
    AnalyseComponent, StatsComponent, ValuesComponent, PartnersComponent,
    ContactComponent, TeamComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}