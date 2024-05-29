import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  // private emailService = inject(EmailService);

  public formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) { }

  public contactForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    correoElectronico: ['', [Validators.email, Validators.required]],
    content: ['', Validators.required]
  });

  enviarFormularioContacto() {
    // console.log(this.contactForm.value)
    this.emailService.enviarCorreo(this.contactForm.value)
      // .subscribe(resp => console.log(resp))
    // this.contactForm.reset();
  }

}
