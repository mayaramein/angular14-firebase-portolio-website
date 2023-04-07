import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phrases = ['Full Stack Developer.', 'Software Developer.', 'UI Developer.', 'Frontend Developer.', 'Backend Developer.', 'Software Engineer.',  'Freelancer.', 'Graphic Designer.',]

  constructor() { }

  ngOnInit(): void {
  }

}
