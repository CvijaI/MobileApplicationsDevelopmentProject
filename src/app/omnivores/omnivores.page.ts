import { Component, OnInit } from '@angular/core';

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

}
