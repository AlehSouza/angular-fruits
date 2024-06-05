import { Component, EventEmitter, Output } from '@angular/core';
import { Seller } from '../../schemas/seller.schema';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-seller',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modal-seller.component.html',
  styleUrl: './modal-seller.component.scss'
})
export class ModalSellerComponent {

    @Output() toggleModalInfoEmitter = new EventEmitter<Seller>()

    isOpen: boolean = false
    selectedSeller!: Seller

    handleSelectSeller(seller: Seller){
      this.toggleModalInfoEmitter.emit(seller)
      this.selectedSeller = seller
      console.log(seller)
    }

    handleOpen() {
      this.isOpen = !this.isOpen
    }

}
