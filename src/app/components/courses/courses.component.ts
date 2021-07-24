import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      language: 'java',
      year: '2021',
      name: 'Programación Funcional con Java SE',
      platform: 'PLATZI',
      description: 'Bases de programación funcional, funciones puras, funciones de orden superior, funciones lambda, interfaces funcionales; function, predicate, consumer, supplier, bi-functions. Duración: 4 horas'
    },

    {
      language: 'kotlin',
      year: '2021',
      name: 'Curso de Kotlin',
      platform: 'PLATZI',
      description: 'Fundamentos de Kotlin, estructuras de control de flujo, colecciones de datos, scope functions. Duración: 4 horas'
    },

    {
      language: 'java',
      year: '2021',
      name: 'Curso de Java Spring',
      platform: 'PLATZI',
      description: 'APIs con Java Spring, conexion a base de datos PostgreSQL, documentación de APIs con Swagger, desplegar aplicaciones en Heroku. Duración: 5 horas'
    },

    {
      language: 'django',
      year: '2020',
      name: 'Desarrollo Web con Python y Django',
      platform: 'UDEMY',
      description: 'Introducción a Django, entornos virtuales de python, CRUD básico (modelos, vistas y formularios), conexión a base de datos PostgreSQL, seguridad con Django. Duración: 12 horas'
    },

    {
      language: 'python',
      year: '2020',
      name: 'Curso Maestro de Python 3: Aprende Desde Cero',
      platform: 'UDEMY',
      description: 'Programación orientada a objetos, manejo de ficheros, bases de datos con SQLite, interfaces gráficas con Tkinter, documentación y pruebas. Duración: 20,5 horas'
    },

    {
      language: 'spring boot',
      year: '2020',
      name: 'Spring Boot 2 & Spring MVC',
      platform: 'UDEMY',
      description: 'Spring Framework, Spring Boot, Spring Data JPA, Hibernate, Thymeleaf integración con Bootstrap, conexión con bases de datos relacionales H2 y MySQL. Duración: 42,5 horas'
    },

    {
      language: 'angular',
      year: '2020',
      name: 'Angular: De cero a experto (Angular 10+)',
      platform: 'UDEMY',
      description: 'Base sólida de Angular, TypeScript, conceptos de ECMAScript 6, Aplicaciones básicas en Ionic, componentes, servicios, Directivas, PIPES. Duración: 35,5 horas'
    },

    {
      language: 'docker',
      year: '2020',
      name: 'Docker, de principiante a experto',
      platform: 'UDEMY',
      description: 'Fundamentos de Docker, Creación y despliegue de aplicaciones, Imágenes, Containes, Volúmenes, Redes. Duración: 8,5 horas'
    },

    {
      language: 'scrum developer',
      year: '2019',
      name: 'Scrum Developer Certified',
      platform: 'SCRUM STUDY',
      description: 'Principios de Scrum, manejo de cambios y riesgos, planificación y estimación de proyectos. Duración: 28 horas'
    },

    {
      language: 'git',
      year: '2019',
      name: 'GIT + GitHub',
      platform: 'UDEMY',
      description: 'Base sólida de Git, Desarrollo de proyectos colaborativos (trabajo en equipo), GitHub y repositorios remotos seguros, GitHub para la administración de proyectos, GitHub Pages. Duración: 7 horas'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
