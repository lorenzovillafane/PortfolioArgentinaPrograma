import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { EstudiosComponent } from './components/pages/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    MenuComponent,
    FooterComponent,
    SocialComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
