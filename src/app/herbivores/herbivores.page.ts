import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbivores',
  templateUrl: './herbivores.page.html',
  styleUrls: ['./herbivores.page.scss'],
})
export class HerbivoresPage implements OnInit {
  //An array of strings describing different types of herbivores
  herbivoreTypes: string[] = ["Frugivores eat mostly fruits",
  "Granivores eat mostly seeds",
  "Nectarivores eat mostly nectar",
  "Folivores eat mostly leaves",
  "Xylophagy eat mostly wood",
  "Detritivores eat mostly dead plant material"]
  constructor() { }

  ngOnInit() {
  }

}
