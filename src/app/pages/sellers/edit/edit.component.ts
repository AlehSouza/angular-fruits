import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../../../services/seller/seller.service';
import { Phone, PhoneForm, Seller, SellerForm } from '../../../schemas/seller.schema';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  constructor ( 
    public route: ActivatedRoute,
    public sellerService: SellerService
  ) {}
  

  sellerId!: string | null
  seller!: Seller
  sellerForm = this.sellerService.generateForm()

  emptyPhone: Phone = {
    owner: '',
    number: ''
  }

  ngOnInit(): void {

    this.sellerId = this.route.snapshot.paramMap.get('id')

    if(!this.sellerId) return
    
    this.seller = this.sellerService.getSellersById(parseInt(this.sellerId))
    this.sellerForm.patchValue(this.sellerService.getSellersById(parseInt(this.sellerId)))

    this.seller.phones.forEach(phone => {
      this.handleAddPhone(phone)
    })
  }

  handleAddPhone(phone: Phone){
    const dfPhone = this.sellerService.generatePhoneForm();
    dfPhone.patchValue(phone)
    this.sellerForm.controls.phones.push(dfPhone)
  }

  handleRemovePhone(index: number){
    this.sellerForm.controls.phones.removeAt(index)
  }

  handleUpdatePhone(index: number, phone: PhoneForm){
    this.sellerForm.controls.phones.value[index] = phone.getRawValue()
  } 


}
