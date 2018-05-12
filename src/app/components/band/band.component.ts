

import { Component, OnInit } from '@angular/core';
import { BandService, Band } from '../../services/band.service';
import { ActivatedRoute } from '@angular/router';
// import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  // animations: [fadeInAnimation],  
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  band: Band;
  constructor(public bandService: BandService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id)
      this.band = bandService.getBand(params.id)
    })
  }

  ngOnInit() {
  }

}

