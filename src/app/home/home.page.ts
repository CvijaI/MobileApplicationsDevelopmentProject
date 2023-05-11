import { Component, OnInit } from '@angular/core';
import { ServiceAnimalsService } from '../service-animals.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor() {}
  
  ngOnInit() {
    
  }
}
