import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      title: 'ASOBuilder 2.0',
      date: 'Julio 2021',
      route: '/aso-builder-2',
      tags: [{
        value: 'Destacado',
        color: 'bg-success'
      }, {
        value: 'Actualizado',
        color: 'bg-warning'
      }],
      highlight: true,
      technologies: 'Java | Spring Boot | Thymeleaf',
      description: 'Crea APIs sin programar a partir de su definicion.',
      image: 'assets/images/projects/aso_builder_2/aso_builder_portfolio.png'
    },
    {
      title: 'Builder',
      date: 'Abril 2021',
      route: '/builder',
      tags: [{
        value: 'Destacado',
        color: 'bg-success'
      }, {
        value: 'Actualizado',
        color: 'bg-warning'
      }],
      highlight: true,
      technologies: 'Java | Spring Boot | Angular',
      description: 'Crea el código que te gustaría que existiera sin siquiera escribir.',
      image: 'assets/images/projects/builder/builder_portfolio.png'
    },
    {
      title: 'Accountant',
      date: 'Enero 2021',
      route: '/accountant',
      tags: [{
        value: 'Actualizado',
        color: 'bg-warning'
      }],
      highlight: false,
      technologies: 'Java | Spring Boot | Thymeleaf',
      description: 'Seguimiento a tu contabilidad, registra tus ingresos y egresos.',
      image: 'assets/images/projects/accountant/accountant_portfolio.png'
    },
    {
      title: 'ProjectManager',
      date: 'Septiembre 2020',
      route: '/project-manager',
      highlight: false,
      technologies: 'NodeJS | Puppeteer',
      description: 'Compila, despliega (en Jenkins) y prueba un API en un solo click.',
      image: 'assets/images/projects/project_manager/project_manager_portfolio.png'
    },
    {
      title: 'DevsUtilities',
      date: 'Septiembre 2020',
      route: '/devs-utilities',
      highlight: false,
      technologies: 'Java | Maven',
      description: 'Programa y ejecuta tus actividades más fácil y rápido.',
      image: 'assets/images/projects/devs_utilities/devs_utilities_portfolio.png'
    },
    {
      title: 'DatabaseHelper',
      date: 'Enero 2020',
      route: '/database-helper',
      highlight: false,
      technologies: 'Java | Spring Boot | DrawIO',
      description: 'Crea tus entidades Hibernate a partir del diagrama ER.',
      image: 'assets/images/projects/database_helper/database_helper_portfolio.png'
    },
    {
      title: 'ASOBuilder',
      date: 'Julio 2019',
      route: '/aso-builder',
      tags: [{
        value: 'Destacado',
        color: 'bg-success'
      },{
        value: 'Deprecado',
        color: 'bg-danger'
      }],
      highlight: true,
      technologies: 'Java | Spring Boot | Thymeleaf',
      description: 'Crea APIs sin programar a partir de su definicion.',
      image: 'assets/images/projects/aso_builder/aso_builder_portfolio.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
