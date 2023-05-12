import { Component, OnInit } from '@angular/core';
//import { ServiceAnimalsService } from '../service-animals.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.page.html',
  styleUrls: ['./voting.page.scss'],
})
export class VotingPage implements OnInit {
  myAnimalOrder: string= "";
  constructor(private storage: Storage, private navCtrl: NavController) { }
  ngOnInit() {
  }
  
  async ionViewWillEnter() {
    await this.storage.create();
    this.myAnimalOrder = await this.storage.get('animal');
    }
    async saveAnimal() {
    await this.storage.set('animal', this.myAnimalOrder)
    .then(
    ()=>{
    
    })
    .catch();
    }

}
