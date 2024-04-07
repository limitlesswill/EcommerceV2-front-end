import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  totalAmount = JSON.parse(localStorage.getItem('PaymentAmount') as any) || [];
  transactionID = "";

  constructor() { }
}