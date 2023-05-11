import { Component, OnInit } from '@angular/core';
import { ServiceAnimalsService } from '../service-animals.service';

@Component({
  selector: 'app-carnivores',
  templateUrl: './carnivores.page.html',
  styleUrls: ['./carnivores.page.scss'],
})
export class CarnivoresPage implements OnInit {
  largestCarnivores: string[] = ["Polar bear(Ursus maritimus)", "Brown bear(Ursus arctos)", "American black bear(Ursus americanus)", "Tiger(Panthera tigris)", "Lion(Panthera leo)"]
  constructor() { }
  
  ngOnInit() {
    
  }
  
}
