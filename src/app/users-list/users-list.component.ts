import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  searchText:any=""
  users=[
    {
      firstName:"Khalil",
      lastName:"Sliti",
      email:"khalil.sliti@insat.u-carthage.tn",
      creationDate:`new Date()`
    },
    {
      firstName:"Mahdi",
      lastName:"Bouaziz",
      email:"mahdi.bouaziz@insat.u-carthage.tn",
      url:""
    },
    {
      firstName:"Hana",
      lastName:"Ben Ghezail",
      email:"hana.benghezail@insat.u-carthage.tn",
      url:""
    },
    {
      firstName:"Hana",
      lastName:"Ben Asker",
      email:"hana.benasker@insat.u-carthage.tn",
      url:""
    },
    {
      firstName:"Fedi",
      lastName:"Kestentini",
      email:"fedi.Kestentini@insat.u-carthage.tn",
      url:""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
