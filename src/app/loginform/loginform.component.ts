import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  pname:any;
  age:any;
  gender:any;
  place:any;

isFormValid=()=>{
  return this.pname && this.age && this.gender && this.place;
}
  constructor() { }

  ngOnInit(): void {
  }

}
