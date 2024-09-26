import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSearchBarComponent } from './user-search-bar/user-search-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';  // Correctly import ScrollingModule
import { TableModule } from 'primeng/table';

import { AccordionModule } from 'primeng/accordion';
    import { AutoCompleteModule } from 'primeng/autocomplete';
    import { AvatarModule } from 'primeng/avatar';
    import { AvatarGroupModule } from 'primeng/avatargroup';
    import { BadgeModule } from 'primeng/badge';
    import { BreadcrumbModule } from 'primeng/breadcrumb';
    import { ButtonModule } from 'primeng/button';
    import { CalendarModule } from 'primeng/calendar';
    import { CarouselModule } from 'primeng/carousel';
    import { CascadeSelectModule } from 'primeng/cascadeselect';
    import { ChartModule } from 'primeng/chart';
    import { CheckboxModule } from 'primeng/checkbox';
    import { ChipModule } from 'primeng/chip';
    import { ChipsModule } from 'primeng/chips';
    import { ConfirmDialogModule } from 'primeng/confirmdialog';
    import { ConfirmPopupModule } from 'primeng/confirmpopup';
    import { ColorPickerModule } from 'primeng/colorpicker';
    import { ContextMenuModule } from 'primeng/contextmenu';
    import { DataViewModule } from 'primeng/dataview';
    import { VirtualScrollerModule } from 'primeng/virtualscroller';
    import { DialogModule } from 'primeng/dialog';
    import { DividerModule } from 'primeng/divider';
    import { DockModule } from 'primeng/dock';
    import { DragDropModule } from 'primeng/dragdrop';
    import { DropdownModule } from 'primeng/dropdown';
    import { DynamicDialogModule } from 'primeng/dynamicdialog';
    import { DeferModule } from 'primeng/defer';
    import { EditorModule } from 'primeng/editor';
    import { FieldsetModule } from 'primeng/fieldset';
    import { FileUploadModule } from 'primeng/fileupload';
    import { FocusTrapModule } from 'primeng/focustrap';
    import { GalleriaModule } from 'primeng/galleria';
    import { InplaceModule } from 'primeng/inplace';
    import { InputMaskModule } from 'primeng/inputmask';
    import { InputSwitchModule } from 'primeng/inputswitch';
    import { InputTextModule } from 'primeng/inputtext';
    import { InputNumberModule } from 'primeng/inputnumber';
    import { InputTextareaModule } from 'primeng/inputtextarea';
    
    import { KnobModule } from 'primeng/knob';
    import { ListboxModule } from 'primeng/listbox';
    import { MegaMenuModule } from 'primeng/megamenu';
    import { MenuModule } from 'primeng/menu';
    import { MenubarModule } from 'primeng/menubar';
    import { MessageModule } from 'primeng/message';
    import { MessagesModule } from 'primeng/messages';
    import { MultiSelectModule } from 'primeng/multiselect';
    import { OrderListModule } from 'primeng/orderlist';
    import { OrganizationChartModule } from 'primeng/organizationchart';
    import { OverlayPanelModule } from 'primeng/overlaypanel';
    import { PaginatorModule } from 'primeng/paginator';
    import { PanelModule } from 'primeng/panel';
    import { PanelMenuModule } from 'primeng/panelmenu';
    import { PasswordModule } from 'primeng/password';
    import { PickListModule } from 'primeng/picklist';
    import { ProgressBarModule } from 'primeng/progressbar';
    import { RadioButtonModule } from 'primeng/radiobutton';
    import { RatingModule } from 'primeng/rating';
    import { ScrollPanelModule } from 'primeng/scrollpanel';
    import { ScrollTopModule } from 'primeng/scrolltop';
    import { SelectButtonModule } from 'primeng/selectbutton';
    import { SidebarModule } from 'primeng/sidebar';
    import { SkeletonModule } from 'primeng/skeleton';
    import { SlideMenuModule } from 'primeng/slidemenu';
    import { SliderModule } from 'primeng/slider';
    import { SpeedDialModule } from 'primeng/speeddial';
    import { SpinnerModule } from 'primeng/spinner';
    import { SplitButtonModule } from 'primeng/splitbutton';
    import { SplitterModule } from 'primeng/splitter';
    import { StepsModule } from 'primeng/steps';
    import { TabMenuModule } from 'primeng/tabmenu';
    import { TabViewModule } from 'primeng/tabview';
    import { TagModule } from 'primeng/tag';
    import { TerminalModule } from 'primeng/terminal';
    import { TieredMenuModule } from 'primeng/tieredmenu';
    import { TimelineModule } from 'primeng/timeline';
    import { ToastModule } from 'primeng/toast';
    import { ToggleButtonModule } from 'primeng/togglebutton';
    import { ToolbarModule } from 'primeng/toolbar';
    import { TooltipModule } from 'primeng/tooltip';
    import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
    import { TreeModule } from 'primeng/tree';
    import { TreeSelectModule } from 'primeng/treeselect';
    import { TreeTableModule } from 'primeng/treetable';
    
    import { CardModule } from 'primeng/card';
    import { BlockUIModule } from 'primeng/blockui';
    import { ProgressSpinnerModule } from 'primeng/progressspinner';
    import { RippleModule } from 'primeng/ripple';

    import { StyleClassModule } from 'primeng/styleclass';
    import { HttpClientModule } from '@angular/common/http';
    import { ProductService } from './service/productservice';
  
    import { ImageModule } from 'primeng/image';
    import { CustomerService } from './service/customerservice';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserSearchBarComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    TableModule,
    ScrollingModule,  // Use ScrollingModule, not CdkVirtualScrollViewport
    
    AvatarModule,
    AvatarGroupModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    DeferModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    FocusTrapModule,
    GalleriaModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    CardModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
  InputTextModule,
    ImageModule,
    

  ],
  providers: [
    ProductService,
    CustomerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
