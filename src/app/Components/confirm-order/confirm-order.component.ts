import { PaymentWaysComponent } from './../payment-ways/payment-ways.component';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PaymentService } from '../../Services/payment.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent implements OnInit {

amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(private router: Router, private payment: PaymentService) { }

  ngOnInit(): void {

    this.amount = this.payment.totalAmount;
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === 'COMPLETED') {
              this.payment.transactionID = details.id;
              this.router.navigate(['confirm']);
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        }
      }
    ).render(this.paymentRef.nativeElement);
  }

  cancel() {
    this.router.navigate(['cart']);
  }

}
