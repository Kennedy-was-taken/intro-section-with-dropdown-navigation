import { Component } from '@angular/core';
import { PopupsService } from './services/popups.service';
import { animate, trigger, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [

    // used to open or close the sidebar
    trigger('slideInOut', [

      state('out', style({
        width: '60%'})),

      state('in', style({
        width: '0',
        display: 'none'})),

      transition('in => out', animate('0.6s ease')),
      transition('out => in', animate('0.6s ease'))
    ]),

    // used to either darken or undarken the screen 
    trigger('darken', [

      state('remove', style({
        opacity: '0',
        display: 'none'
      })),

      state('cover', style({
        opacity: '0.7',
        display: 'block'
      })),

      transition('remove => cover', animate('0.5s ease-in-out')),
      transition('cover => remove', animate('0.5s ease-in-out')),
    ]),

    // used to activate a drop down
    trigger('popup', [

      state('show', style({
        display: 'block'
      })),

      state('disappear', style({
        display: 'none'
      })),

      transition('disappear => show', animate('0.5s ease-in-out')),
      transition('show => disappear', animate('0.5s ease-in-out')),

    ]),

    // used to switch drop down placement
    trigger('switch', [

      state('active', style({
        width: '10%'
      })),

      state('off', style({
        width: '0%'
      })),

      transition('disappear => show', animate('0.5s ease-in-out')),
      transition('show => disappear', animate('0.5s ease-in-out')),

    ]),
  ]
})

export class AppComponent {
  title = 'intro-section-with-dropdown-navigation';

  constructor(private popup : PopupsService){}

  private isDropDownActive : boolean = false;

  private isItSwitched : boolean = false;

  private isSideBarVisible : boolean = false;

  private isFeatureClicked : boolean = false;

  private isCompanyClicked : boolean = false;

  private isSidebarInUse = this.popup.getSideBarVisible();

  // sets the isSideBarVisible value
  public setOpenSideMenu() : void{
    this.popup.setSideBarVisible(!this.isSideBarVisible);
    this.isSideBarVisible = this.popup.getSideBarVisible();
  }

  // sets the isFeatureClicked value
  public setclickedFeature() : void{
    this.popup.setFeatureValue(!this.isFeatureClicked);
    this.isFeatureClicked = this.popup.getFeatureValue();
  }

  // sets the isCompanyClicked value
  public setclickedCompany() : void{
    this.popup.setCompanyValue(!this.isCompanyClicked);
    this.isCompanyClicked = this.popup.getCompanyValue();
  }

  // sets the isSidebarInUse value
  public setIsSidebarInUse() : void{
    this.isSidebarInUse = !this.isSidebarInUse;
  }

  // sets the isDropDownActive value
  public setIsDropDownActive() : void{
    this.isDropDownActive = !this.isDropDownActive;
  }

  // sets the isItSwitched value
  public setIsItSwitched() : void{
    this.isItSwitched = !this.isItSwitched;
  }

  // gets the isSideBarVisible value
  public getSideMenu() : boolean{
    return this.isSideBarVisible;
  }

  // gets the isFeatureClicked value
  public getFeatureClicked() : boolean{
    return this.isFeatureClicked;
  }

  // gets the isCompanyClicked value
  public getCompanyClicked() : boolean{
    return this.isCompanyClicked;
  }

  // gets the isSidebarInUse value
  public getIsSidebarInUse() : boolean{
    return this.isSidebarInUse;
  }

  // gets the isDropDownActive value
  public getIsDropDownActive() : boolean{
    return this.isDropDownActive;
  }

  // gets the isItSwitched value
  public getIsItSwitched() : boolean{
    return this.isItSwitched;
  }

  // all drop downs and sidebar closes
  clickedOutside(): void {
    //checks to see if the side bar is open
    if(this.getSideMenu() === true){
      
      //if the sideBar is not in use, closes sidebar
      if(!this.getIsSidebarInUse() === false){
        this.isCompanyClicked = false;
        this.isFeatureClicked = false;
        this.setIsSidebarInUse();
        this.setOpenSideMenu();
        console.log("not active, sidebar container closed");
      }
      else{
        this.setIsSidebarInUse();
        console.log('sidebar in use');
      }
      
    }
    //if all is already closed, do nothing
    else{
      console.log("sidebar not active, so no need to close");
    }
    
  }

  // all drop down closes
  public clickOutsideTopBarFeature() : void {
    //checks to see if the top bar options is active
    if(this.getFeatureClicked() === true){

      console.log("about to close");
      this.isFeatureClicked = false;
    }
  }

  // drop down closes
  public clickOutsideTopBarCompany() : void {
    //checks to see if the top bar options is active
    
    if(this.getCompanyClicked() === true){

      console.log("about to close");
      this.isCompanyClicked = false;
    }
  }

}
