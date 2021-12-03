import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  data=""
  constructor( private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
    this.data = this.router.snapshot.params.name
  }
  

}
