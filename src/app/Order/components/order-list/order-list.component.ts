import { OrderDetailsService } from './../../Service/order-details.service';
import { OrderService } from '../../Service/order.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Order, OrderDetails } from '../../models/order/order.module';
import { PaymentService } from '../../../Services/payment.service';
import { environment } from '../../../../environment/environment';
import { NavBarComponent } from '../../../Components/nav-bar/nav-bar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  UserId: string|null= localStorage.getItem('userId');
  Orders: Order[] = [];
  OrdersDetails: OrderDetails[] = [];
  constructor( private payment: PaymentService, private Router:Router ,private OrderService: OrderService,private OrderDetailsService:OrderDetailsService, private router: Router) { }
  
  transactionId = "";
  
  ngOnInit(): void {
    this.fetchOrders();
    
  }

  fetchOrders(): void {
    if(this.UserId!=null)
    this.OrderService.GetUserOrders(this.UserId).subscribe(Orders => {
      this.Orders = Orders;
    });
  }
  fetchOrdersDetails(id:number): void {
    this.OrderDetailsService.GetOrdersDetails(id).subscribe(Orders => {
      this.OrdersDetails = Orders;
    });
  }
  payOrder(Order:Order): void {
    localStorage.setItem('PaymentOrder',JSON.stringify(Order));
    this.Router.navigate(['Pay']);
    this.fetchOrders();
    
  }
  cancel(){
    this.Router.navigate(['cart']);
  }
 editOrder(id: number): void {
    this.fetchOrdersDetails(id);
  }
 deleteOrder(id: number): void {
    Swal.fire({
      title: 'Are you sure to delete this Order?',
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.OrderService.DeleteOrder(id).subscribe((d) => {
          this.fetchOrders(); // Refresh the list
        });  
      }
    });
  }
  deleteOrderDetails(id: number,OId:number): void {
    Swal.fire({
      title: 'Are you sure to delete this Order Item?',
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.OrderDetailsService.DeleteOrder(id).subscribe((d) => {
          this.fetchOrdersDetails(OId); // Refresh the list
          this.fetchOrders();
        });
      }
    });
  }
  IncreamentQuantity(OrdersDetails:OrderDetails): void {
    OrdersDetails.quantity++;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();
    }); 
  }
  DecreamentQuantity(OrdersDetails:OrderDetails): void {
    OrdersDetails.quantity--;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();
    }); 
  }
  back(): void {
    this.OrdersDetails=[];
  }

}
