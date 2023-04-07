import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from './service/auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  public contactForm!: FormGroup;
  constructor(
    public fb: FormBuilder
    ) {}
    ngOnInit() {
      this.contactaddForm();
    }
    contactaddForm() {
      this.contactForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        message: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          ],
        ],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      });
    }
    get title() {
      return this.contactForm.get('title');
    }
    get message() {
      return this.contactForm.get('message');
    }
    get email() {
      return this.contactForm.get('email');
    }
    get phone() {
      return this.contactForm.get('phone');
    }
    ResetForm() {
      this.contactForm.reset();
    }
    submitContactData() {
      this.ResetForm();
    }
}
