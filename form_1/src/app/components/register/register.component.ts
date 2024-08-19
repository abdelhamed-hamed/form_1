import {
  KeyValuePipe,
  NgClass,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    TitleCasePipe,
    UpperCasePipe,
    RouterLink,
    NgIf,
    NgClass,
    KeyValuePipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
