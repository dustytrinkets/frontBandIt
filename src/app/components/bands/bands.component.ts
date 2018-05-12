import { Component, OnInit } from '@angular/core';
import { BandService, Band } from '../../services/band.service';
import { Router } from '@angular/router';

// import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
})


export class BandsComponent implements OnInit {
  bandsToDisplay: Band[];
  constructor(public bandService: BandService,
    private router: Router) {
    let bandsToDisplay = bandService.getBands()
    console.log(bandsToDisplay)
  }

  ngOnInit() {

  }

  searchTerm(term: string) {
    // En este componente tenemos un input que nos permite realizar busquedas
    console.log(term)
    this.bandService.searchBands(term);
  }

}
