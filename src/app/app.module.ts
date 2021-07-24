import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTING } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AsoBuilderComponent } from './components/projects/aso-builder/aso-builder.component';
import { AsoBuilder2Component } from './components/projects/aso-builder-2/aso-builder-2.component';
import { DatabaseHelperComponent } from './components/projects/database-helper/database-helper.component';
import { DevsUtilitiesComponent } from './components/projects/devs-utilities/devs-utilities.component';
import { ProjectManagerComponent } from './components/projects/project-manager/project-manager.component';
import { AccountantComponent } from './components/projects/accountant/accountant.component';
import { BuilderComponent } from './components/projects/builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsComponent,
    CoursesComponent,
    FooterComponent,
    AsoBuilderComponent,
    AsoBuilder2Component,
    DatabaseHelperComponent,
    DevsUtilitiesComponent,
    ProjectManagerComponent,
    AccountantComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
