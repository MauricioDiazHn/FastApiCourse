import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  CardComponent,
  CardBodyComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  ButtonDirective,
  TextColorDirective, 
  FormDirective, 
  FormControlDirective
} from '@coreui/angular';
import { Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.services';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    CardComponent,
    CardBodyComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    ButtonDirective,
    TextColorDirective,
    FormDirective, 
    IconDirective, 
    FormControlDirective, 
    NgStyle],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log("Porfavor completa todos los campos.");
      this.errorMessage = 'Por favor completa todos los campos.';
      $('#modal').iziModal({
        title: 'Error',
        subtitle: 'Por favor completa todos los campos.',
        headerColor: '#B22222', // Rojo vino
        background: '#F08080', // Rojo clarito
        width: 400, // Ancho del modal
        zindex: 999, // Asegura que esté por encima de otros elementos
        radius: 10, // Bordes redondeados
        timeout: 3000, // Tiempo en milisegundos (3 segundos)
        timeoutProgressbar: true, // Muestra una barra de progreso para indicar el tiempo restante
        overlayColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo
        closeOnEscape: true, // Permite cerrar con la tecla Escape
        closeButton: false, // Muestra un botón de cierre
        transitionIn: 'fadeIn', // Animación al aparecer
        transitionOut: 'fadeOut', // Animación al desaparecer
        position: 'center', // Centrado horizontal y vertical
      });

      $('#modal').iziModal('open');
      return;
    }
    console.log(this.loginForm.value);
    this.isLoading = true;
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error en el login:', error);
        this.errorMessage = error.message || 'Error al iniciar sesión.';
        $('#modal').iziModal({
          title: 'Error',
          subtitle: 'Usuario o Contraseña Incorrecta.',
          headerColor: '#B22222', // Rojo vino
          background: '#F08080', // Rojo clarito
          width: 400, // Ancho del modal
          zindex: 999, // Asegura que esté por encima de otros elementos
          radius: 10, // Bordes redondeados
          timeout: 3000, // Tiempo en milisegundos (3 segundos)
          timeoutProgressbar: true, // Muestra una barra de progreso para indicar el tiempo restante
          overlayColor: 'rgba(0, 0, 0, 0.5)', // Oscurece el fondo
          closeOnEscape: true, // Permite cerrar con la tecla Escape
          closeButton: false, // Muestra un botón de cierre
          transitionIn: 'fadeIn', // Animación al aparecer
          transitionOut: 'fadeOut', // Animación al desaparecer
          position: 'center', // Centrado horizontal y vertical
        });
  
        $('#modal').iziModal('open');
        this.isLoading = false;
      },
    });
  }
}
