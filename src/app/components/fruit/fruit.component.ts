import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
})
export class FruitComponent implements OnInit {

  @Input() fruits: any [] = []

  ngOnInit(): void {
  }

}
