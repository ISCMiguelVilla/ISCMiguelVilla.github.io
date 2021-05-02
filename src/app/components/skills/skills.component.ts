import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages = [
    {
      icon: 'fab fa-java',
      title: 'Java'
    },
    {
      icon: 'fab fa-python',
      title: 'Python'
    },
    {
      icon: 'fab fa-php',
      title: 'PHP'
    }
  ];

  skills = [
    {
      image: 'assets/images/icons/java.png',
      name: 'java'
    },
    {
      image: 'assets/images/icons/python.png',
      name: 'python'
    },
    {
      image: 'assets/images/icons/spring.png',
      name: 'spring'
    },
    {
      image: 'assets/images/icons/angular.png',
      name: 'angular'
    },
    {
      image: 'assets/images/icons/bootstrap.png',
      name: 'bootstrap'
    },
    {
      image: 'assets/images/icons/git.png',
      name: 'git'
    },
    {
      image: 'assets/images/icons/github.png',
      name: 'github'
    },
    {
      image: 'assets/images/icons/eclipse.png',
      name: 'eclipse'
    },
    {
      image: 'assets/images/icons/intellij.png',
      name: 'intellij'
    },
    {
      image: 'assets/images/icons/docker.png',
      name: 'docker'
    },
    {
      image: 'assets/images/icons/php.png',
      name: 'php'
    },
    {
      image: 'assets/images/icons/laravel.png',
      name: 'laravel'
    },
    {
      image: 'assets/images/icons/composer.png',
      name: 'composer'
    },
    {
      image: 'assets/images/icons/android.png',
      name: 'android'
    },
    {
      image: 'assets/images/icons/gradle.png',
      name: 'gradle'
    },
    {
      image: 'assets/images/icons/html.png',
      name: 'html'
    },
    {
      image: 'assets/images/icons/css.png',
      name: 'css'
    },
    {
      image: 'assets/images/icons/javascript.webp',
      name: 'javascript'
    },
    {
      image: 'assets/images/icons/linux.png',
      name: 'linux'
    },
    {
      image: 'assets/images/icons/ubuntu.png',
      name: 'ubuntu'
    },
    {
      image: 'assets/images/icons/vue.webp',
      name: 'vue'
    },
    {
      image: 'assets/images/icons/node.png',
      name: 'node'
    },
    {
      image: 'assets/images/icons/puppeteer.png',
      name: 'node'
    },
    {
      image: 'assets/images/icons/mysql.png',
      name: 'mysql'
    },
    {
      image: 'assets/images/icons/oracle.png',
      name: 'oracle'
    },
    {
      image: 'assets/images/icons/hibernate.png',
      name: 'hibernate'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
