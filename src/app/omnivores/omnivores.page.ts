import { Component, OnInit } from '@angular/core';
//import browser 
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-omnivores',
  templateUrl: './omnivores.page.html',
  styleUrls: ['./omnivores.page.scss'],
})
export class OmnivoresPage implements OnInit {
  //An array of strings describing different types of omnivorous animals and their diets
  omnivores: string[] = ["Granivores eat mostly seeds",
  "Nectarivores eat mostly nectar",
  "Folivores eat mostly leaves",
  "Xylophagy eat mostly wood",
  "Detritivores eat mostly dead plant material"]
  constructor() { }

  ngOnInit() {
  }

  //Use the open method of the Browser API to open the specified URL
  async openBrowser() {
    await Browser.open({ url: 'https://a-z-animals.com/blog/well-known-animals-that-are-omnivores/' });
  };
}
