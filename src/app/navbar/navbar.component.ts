import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  githubIcon = faGithub
  hover!: string;

  ngOnInit() {
      this.hover = "1";
  }

  onMouseEnter(){
    this.hover = "2";
  }

  onMouseLeave(){
    this.hover ="1";
  }

  onClick(){
    this.hover ="1";
  }
}
