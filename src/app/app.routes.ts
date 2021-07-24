import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';

import { AsoBuilderComponent } from './components/projects/aso-builder/aso-builder.component';
import { AsoBuilder2Component } from './components/projects/aso-builder-2/aso-builder-2.component';
import { DatabaseHelperComponent } from './components/projects/database-helper/database-helper.component';
import { DevsUtilitiesComponent } from './components/projects/devs-utilities/devs-utilities.component';
import { ProjectManagerComponent } from './components/projects/project-manager/project-manager.component';
import { AccountantComponent } from './components/projects/accountant/accountant.component';
import { BuilderComponent } from './components/projects/builder/builder.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aso-builder', component: AsoBuilderComponent },
    { path: 'aso-builder-2', component: AsoBuilder2Component },
    { path: 'database-helper', component: DatabaseHelperComponent },
    { path: 'devs-utilities', component: DevsUtilitiesComponent },
    { path: 'project-manager', component: ProjectManagerComponent },
    { path: 'accountant', component: AccountantComponent },
    { path: 'builder', component: BuilderComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true, scrollPositionRestoration: 'enabled' });