import {Component, OnInit} from '@angular/core';
import {cars} from '../../data/data';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {

  cars = cars;

  constructor() {
  }

  ngOnInit(): void {
  }

}
