import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
public name: string = 'iroman';
public age: number = 45;

get capitalizedName(): string {
  return this.name.toLocaleUpperCase();
}

getHeroDescription(): string {
  return `${this.name} - ${this.age}`;
}
  constructor() { }


  ngOnInit(): void {
  }

}
