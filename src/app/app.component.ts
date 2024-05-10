import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public socialIcons: Array<{ title: string, icon: string }> = [
    { title: 'linkedin', icon: './assets/icons/social1.svg' },
    { title: 'whatsapp', icon: './assets/icons/social2.svg' },
    { title: 'email', icon: './assets/icons/social3.svg' },
    { title: 'github', icon: './assets/icons/social4.svg' },
  ];

  public technologies: Array<{ title: string, icon: string }> = [
    { title: 'CSS', icon: './assets/icons/technologies-CSS.svg' },
    { title: 'HTML', icon: './assets/icons/technologies-HTML.svg' },
    { title: 'JavaScript', icon: './assets/icons/technologies-JavaScript.svg' },
    { title: 'TypeScript', icon: './assets/icons/technologies-TypeScript.svg' },
    { title: 'Angular', icon: './assets/icons/technologies-Angular.svg' },
    { title: 'NodeJS', icon: './assets/icons/technologies-NodeJS.svg' },
    { title: 'GitHub', icon: './assets/icons/technologies-GitHub.svg' },
    { title: 'Git', icon: './assets/icons/technologies-Git.svg' },
    { title: 'MongoDB', icon: './assets/icons/technologies-MongoDB.svg' },
    { title: 'Photoshop', icon: './assets/icons/technologies-Photoshop.svg' },
    { title: 'Illustrator', icon: './assets/icons/technologies-Illustrator.svg' },
    { title: 'JWT', icon: './assets/icons/technologies-JWT.svg' },
  ]

  public certificates: Array<{ platform: string, title: string, month: string, date: number, link: string }> = [
    { platform: 'Udemy', title: 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS', month: 'Enero', date: 2024, link: '' },
    { platform: 'Udemy', title: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN', month: 'Agosto', date: 2023, link: '' },
    { platform: 'Devtalles', title: 'GIT+GitHub: Todo un sistema de control de versiones de cero', month: 'Abril', date: 2024, link: '' },
    { platform: 'Udemy', title: 'Alojamiento de sitio web en modo serverless en Amazon AWS', month: 'Julio', date: 2022, link: '' },
  ]

}
