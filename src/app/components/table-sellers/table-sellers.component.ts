import { Component, Input, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller/seller.service';
import { Seller } from '../../schemas/seller.schema';

@Component({
  selector: 'app-table-sellers',
  standalone: true,
  imports: [],
  templateUrl: './table-sellers.component.html',
  styleUrl: './table-sellers.component.scss'
})
export class TableSellersComponent implements OnInit {

  @Input() sellers!: Seller[]

  ngOnInit(): void {
  }

}
