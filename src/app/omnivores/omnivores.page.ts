import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-omnivores',
  templateUrl: './omnivores.page.html',
  styleUrls: ['./omnivores.page.scss'],
})
export class OmnivoresPage implements OnInit {
  omnivores: string[] = ["Granivores eat mostly seeds", "Nectarivores eat mostly nectar", "Folivores eat mostly leaves", "Xylophagy eat mostly wood", "Detritivores eat mostly dead plant material"]
  constructor() { }

  ngOnInit() {
  }

  async openBrowser() {
    await Browser.open({ url: 'https://a-z-animals.com/blog/well-known-animals-that-are-omnivores/' });
  };
}
