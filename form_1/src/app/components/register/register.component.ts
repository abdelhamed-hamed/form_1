import {
  KeyValuePipe,
  NgClass,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
export class RegisterComponent implements OnInit {
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('Register');
  }
}
