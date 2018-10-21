import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CasesComponent } from './cases/cases.component';
import { TeamComponent } from './team/team.component';
import { PublicationsComponent } from './publications/publications.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ContactComponent } from './contact/contact.component';
import { CertyficationsComponent } from './certyfications/certyfications.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'onas', component: AboutusComponent},
  {path: 'uslugi', component: ServicesComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'przypadki', component: CasesComponent},
  {path: 'zespol', component: TeamComponent},
  {path: 'publikacje', component: PublicationsComponent},
  {path: 'sprzet', component: EquipmentComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'certyfikaty', component: CertyficationsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutusComponent,
    ServicesComponent,
    GalleryComponent,
    CasesComponent,
    TeamComponent,
    PublicationsComponent,
    EquipmentComponent,
    ContactComponent,
    CertyficationsComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0CNfYubMCK65RWVnI8TzIRw1ROhSZLzc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
