import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountquery',
  templateUrl: './accountquery.component.html',
  styleUrls: ['./accountquery.component.css']
})
export class AccountqueryComponent implements OnInit {

  devQueryVal: any;

  constructor() { }

  ngOnInit(): void {
    this.devQueryVal = '';
  }

  devQuerySubmit(){
    
    alert(this.devQueryVal);
  }

}
