import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.page.html',
  styleUrls: ['./voting.page.scss'],
})
export class VotingPage implements OnInit {
  //A variable myAnimalOrder to store the user's favorite animal order, initialized to an empty string
  myAnimalOrder: string= "";
  //constructor with 2 parametres, storage for storing data and navController to navigate to different pages
  constructor(private storage: Storage, private navCtrl: NavController) { }
  ngOnInit() {
  }
    //function that reads the value of the current favourite animal order(myAnimalOrder) from storage when the page is opened
    async ionViewWillEnter() {
    await this.storage.create();
    this.myAnimalOrder = await this.storage.get('animal');
    }
    //function that saves the value of myAnimalOrder and stores it
    async saveAnimal() {
    await this.storage.set('animal', this.myAnimalOrder)
    .then(
    ()=>{
    })
    .catch();
    }
}
