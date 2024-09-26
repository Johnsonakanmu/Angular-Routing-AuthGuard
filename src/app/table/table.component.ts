import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/userService';
import { MessageService, SelectItem } from 'primeng/api'; 
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService, UserService],
})
export class TableComponent implements OnInit {

  users!: User[];

  selectedUsers!: User[];
  statuses!: SelectItem[];

  

  loading: boolean = true;

  clonedUsers: { [s: string]:User} = {};

  activityValues: number[] = [0, 100];
  searchValue: string = ''; // Initialize searchValue

  user: User = {};
  userDialog: boolean = false;
  submitted: boolean = false;
  deleteUserDialog: boolean = false;

  deleteUsersDialog: boolean = false;

  selectedRole: string[] = [];
  

  role: any[];
  
  @ViewChild('filter') filter!: ElementRef;

  
  constructor(private userService: UserService, private messageService: MessageService) { 
    this.role = [
      { name: 'Admin', code: 'ADMIN' },
      { name: 'User', code: 'USER' },
  ];
  }

  ngOnInit(): void {
    this.userService.getUsersMini().then((data) => {
      this.users = data;
      this.loading = false;
  });

  this.statuses = [
      { label: 'enable', value: 'ENABLE' },
      { label: 'disable', value: 'DISABLE' },
  ];


  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal(
        (event.target as HTMLInputElement).value,
        'contains'
    );
}

clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}


  onRowEditInit(user: User) {
    this.clonedUsers[user.id as string] = { ...user };
}

onRowEditSave(user: User) {
  if (user.name) {
      delete this.clonedUsers[user.id as string];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
  } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
  }
}

onRowEditCancel(user: User, index: number) {
    this.users[index] = this.clonedUsers[user.id as string];
    delete this.clonedUsers[user.id as string];
}

getSeverity(status: string | undefined): string {
  if(!status){
    return 'default';
  }
  
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



openNew() {
  this.user = {};
  this.submitted = false;
  this.userDialog = true;
}

deleteSelectedProducts() {
  this.deleteUsersDialog = true;
}

editProduct(customer: User) {
  this.user = { ...this.user };
  this.userDialog = true;
}

deleteProduct(user: User) {
  this.deleteUserDialog = true;
  this.user = { ...user };
}

confirmDeleteSelected() {
  this.deleteUsersDialog = false;
  this.users = this.users.filter(val => !this.selectedUsers.includes(val));
  // this.customerService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  this.selectedUsers = [];
}

confirmDelete() {
  this.deleteUserDialog = false;
  this.users = this.users.filter(val => val.id !== this.user.id);
  // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  this.user = {};
}

hideDialog() {
  this.userDialog = false;
  this.submitted = false;
}

saveProduct() {
  this.submitted = true;
  if (this.user.name?.trim()) {
      // Handle product save logic here
      this.users = [ ...this.users]
      this.userDialog = false; // Close the dialog after saving
      this.user = {}
  }
  
         
}

}
