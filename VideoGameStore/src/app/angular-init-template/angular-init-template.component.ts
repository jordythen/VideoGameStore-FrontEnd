import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-init-template',
  templateUrl: './angular-init-template.component.html',
  styleUrls: ['./angular-init-template.component.css']
})
export class AngularInitTemplateComponent implements OnInit {
  title = 'VideoGameStore';

  constructor() { }

  ngOnInit(): void {
  }

}
