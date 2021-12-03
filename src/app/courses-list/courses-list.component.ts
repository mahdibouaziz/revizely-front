import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  searchText=""
  courses=[
    {
      title:"ThermoDynamics",
      description:`Thermodynamics is a branch of physics that deals with heat, work, and temperature
       and their relation to energy, entropy, and the physical properties of matter and radiation`,
       price:20,
       hours:30,
       url:"assets/images/thermodynamics.jpg"
    },
    {
      title:"Organic Chemistry",
      description:`Organic chemistry is a branch of chemistry that studies the structure, properties and reactions of organic compounds, which contain carbon in covalent bonding. 
      Study of structure determines their structural formula.`,
       price:30,
       hours:30,
       url:"assets/images/chimieOrganique.jpg"
    },
    {
      title:"C Programming",
      description:`C is a procedural computer programming language supporting structured programming,
       lexical variable scope, and recursion, with a static type system. 
       By design, C provides constructs that map efficiently to typical machine instructions`,
       price:30,
       hours:40,
       url:"assets/images/c-introduction.jpeg"
    }
    , {
      title:"Complex Analysys",
      description:`Complex analysis, traditionally known as the theory of functions of a complex variable,
       is the branch of mathematical analysis that investigates functions of complex numbers`,
       price:20,
       hours:30,
       url:"assets/images/analyseComplexe.jpg",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
