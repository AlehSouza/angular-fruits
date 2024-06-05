import { Component, OnInit, ViewChild } from '@angular/core';
import { TableSellersComponent } from '../../components/table-sellers/table-sellers.component';
import { SellerService } from '../../services/seller/seller.service';
import { Seller } from '../../schemas/seller.schema';
import { ModalSellerComponent } from '../../components/modal-seller/modal-seller.component';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [TableSellersComponent, ModalSellerComponent],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.scss'
})
export class SellersComponent implements OnInit {

  constructor( public sellerService: SellerService ) {}

  @ViewChild(ModalSellerComponent) modalSeller!: ModalSellerComponent

  sellers!: Array<Seller>

  ngOnInit(): void {
    this.sellers = this.sellerService.getSellers()
  }

  toggleInfoSeller (event: any) {
    this.modalSeller.handleOpen()
    this.modalSeller.selectedSeller = event
  }

}
