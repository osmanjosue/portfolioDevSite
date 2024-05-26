import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public socialIcons: Array<{ title: string, icon: string, address: string }> = [
    { title: 'linkedin', icon: './assets/icons/social1.svg', address: 'https://www.linkedin.com/in/osmanherrera/' },
    { title: 'whatsapp', icon: './assets/icons/social2.svg', address: 'https://wa.me/50489709082' },
    { title: 'email',    icon: './assets/icons/social3.svg', address: 'mailto:contact@osmanherrera.dev' },
    { title: 'github',   icon: './assets/icons/social4.svg', address: 'https://github.com/osmanjosue' },
  ];

  public technologies: Array<{ title: string, icon: string }> = [
    { title: 'CSS',         icon: './assets/icons/technologies-CSS.svg' },
    { title: 'HTML',        icon: './assets/icons/technologies-HTML.svg' },
    { title: 'JavaScript',  icon: './assets/icons/technologies-JavaScript.svg' },
    { title: 'TypeScript',  icon: './assets/icons/technologies-TypeScript.svg' },
    { title: 'Angular',     icon: './assets/icons/technologies-Angular.svg' },
    { title: 'NodeJS',      icon: './assets/icons/technologies-NodeJS.svg' },
    { title: 'GitHub',      icon: './assets/icons/technologies-GitHub.svg' },
    { title: 'Git',         icon: './assets/icons/technologies-Git.svg' },
    { title: 'MongoDB',     icon: './assets/icons/technologies-MongoDB.svg' },
    { title: 'Photoshop',   icon: './assets/icons/technologies-Photoshop.svg' },
    { title: 'Illustrator', icon: './assets/icons/technologies-Illustrator.svg' },
    { title: 'JWT',         icon: './assets/icons/technologies-JWT.svg' },
  ]

  public certificates: Array<{ platform: string, title: string, month: string, date: number, link: string }> = [
    { platform: 'Udemy',     title: 'Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS',  month: 'Enero',  date: 2024, link: 'https://www.udemy.com/certificate/UC-53ecf1b8-00d0-49a5-a948-ae2e6d2ecfd0/' },
    { platform: 'Udemy',     title: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN', month: 'Agosto', date: 2023, link: 'https://www.udemy.com/certificate/UC-03475c4f-f50b-491c-a1e2-4975b8aab381/' },
    { platform: 'Devtalles', title: 'GIT+GitHub: Todo un sistema de control de versiones de cero', month: 'Abril',  date: 2024, link: 'https://cursos.devtalles.com/certificates/zl0noyjvkn' },
    { platform: 'Udemy',     title: 'Alojamiento de sitio web en modo serverless en Amazon AWS',   month: 'Julio',  date: 2022, link: 'https://www.udemy.com/certificate/UC-4840328a-96c0-47c9-afa4-04f65c37096d/' },
  ]

}
