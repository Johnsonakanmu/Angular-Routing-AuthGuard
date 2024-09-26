import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customerservice';
import { Customer, } from '../models/customer';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [CustomerService],
  styleUrls: ['./user-list.component.scss'],
  styles: [ `
    :host ::ng-deep {
        .p-paginator {
            .p-paginator-current {
                margin-left: auto;
            }
        }
        
        .p-progressbar {
            height: .5rem;
            background-color: #D8DADC;
        
            .p-progressbar-value {
                background-color: #607D8B;
            }
        }
        
        .table-header {
            display: flex;
            justify-content: space-between;
        }
        
        .p-calendar .p-datepicker {
            min-width: 25rem;
        
            td {
                font-weight: 400;
            }
        }
        
        .p-datatable.p-datatable-customers {
            .p-datatable-header {
                padding: 1rem;
                text-align: left;
                font-size: 1.5rem;
            }
        
            .p-paginator {
                padding: 1rem;
            }
        
            .p-datatable-thead > tr > th {
                text-align: left;
            }
        
            .p-datatable-tbody > tr > td {
                cursor: auto;
            }
        
            .p-dropdown-label:not(.p-placeholder) {
                text-transform: uppercase;
            }
        }
    
        .p-w-100 {
            width: 100%;
        }
        
        /* Responsive */
        .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
            display: none;
        }
    }
    
    @media screen and (max-width: 960px) {
        :host ::ng-deep {
            .p-datatable {
                &.p-datatable-customers {
                    .p-datatable-thead > tr > th,
                    .p-datatable-tfoot > tr > td {
                        display: none !important;
                    }
        
                    .p-datatable-tbody > tr {
                        border-bottom: 1px solid var(--layer-2);
        
                        > td {
                            text-align: left;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            border: 0 none;
        
                            .p-column-title {
                                min-width: 30%;
                                display: inline-block;
                                font-weight: bold;
                            }
            
                            p-progressbar {
                                width: 100%;
                            }
    
                            &:last-child {
                                border-bottom: 1px solid var(--surface-d);
                            }
                        }
                    }
                }
            }
        } 
    }   
    `
    ],
  
})
export class UserListComponent implements OnInit {
  customers!: Customer[];

  selectedCustomers!: Customer[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];
  searchValue: string = ''; // Initialize searchValue

  customer: Customer = {};
  customerDialog: boolean = false;
  submitted: boolean = false;
  deleteCustomerDialog: boolean = false;

  deleteCustomersDialog: boolean = false;


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
  });




  this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
  ];
}

getSeverity(status: string): string {
  switch (status) {
      case 'unqualified':
          return 'danger';

      case 'qualified':
          return 'success';

      case 'new':
          return 'info';

      case 'negotiation':
          return 'warning';

      case 'renewal':
          return 'default'; // Provide a default value if needed

      default:
          return 'default'; // Ensure a value is returned for unknown statuses
  }
}


  
  updateStatusFilter(event: any) {
    const selectedStatus = event.value;
    console.log('Selected status:', selectedStatus);
  
    // Apply the filter to your data
    this.customers = this.customers.filter(customer =>
      customer.status === selectedStatus || selectedStatus === null
    );
  }



  openNew() {
    this.customer = {};
    this.submitted = false;
    this.customerDialog = true;
}

deleteSelectedProducts() {
    this.deleteCustomersDialog = true;
}

editProduct(customer: Customer) {
    this.customer = { ...this.customer };
    this.customerDialog = true;
}

deleteProduct(customer: Customer) {
    this.deleteCustomerDialog = true;
    this.customer = { ...customer };
}

confirmDeleteSelected() {
    this.deleteCustomersDialog = false;
    this.customers = this.customers.filter(val => !this.selectedCustomers.includes(val));
    // this.customerService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    this.selectedCustomers = [];
}

confirmDelete() {
    this.deleteCustomerDialog = false;
    this.customers = this.customers.filter(val => val.id !== this.customer.id);
    // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    this.customer = {};
}

hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
}

saveProduct() {
    this.submitted = true;
    if (this.customer.name?.trim()) {
        // Handle product save logic here
        this.customers = [ ...this.customers]
        this.customerDialog = false; // Close the dialog after saving
        this.customer = {}
    }
    
           
}
  

}


