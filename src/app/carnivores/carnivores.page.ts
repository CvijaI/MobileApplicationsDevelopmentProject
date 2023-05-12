import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnivores',
  templateUrl: './carnivores.page.html',
  styleUrls: ['./carnivores.page.scss'],
})
export class CarnivoresPage implements OnInit {
  //declaring the list of 5 largest carnivores
  largestCarnivores: string[] = ["Polar bear(Ursus maritimus)", "Brown bear(Ursus arctos)", "American black bear(Ursus americanus)", "Tiger(Panthera tigris)", "Lion(Panthera leo)"]
  constructor() { }
  
  ngOnInit() {
    
  }
  
}
