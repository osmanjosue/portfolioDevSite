import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  public formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  public contactForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    correoElectronico: ['', [Validators.email, Validators.required]],
    content: ['', Validators.required]
  });

  enviarFormularioContacto() {
    // console.log(this.contactForm.value)
    console.log('Formulario Enviado');
    this.contactForm.reset();
  }

}
