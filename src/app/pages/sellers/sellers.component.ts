import { Component, OnInit } from '@angular/core';
import { TableSellersComponent } from '../../components/table-sellers/table-sellers.component';
import { SellerService } from '../../services/seller/seller.service';
import { Seller } from '../../schemas/seller.schema';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [TableSellersComponent],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.scss'
})
export class SellersComponent implements OnInit {

  constructor( public sellerService: SellerService ) {}

  sellers!: Array<Seller>

  ngOnInit(): void {
    this.sellers = this.sellerService.getSellers()
  }

}
