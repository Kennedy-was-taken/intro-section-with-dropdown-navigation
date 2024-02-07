import { Component } from '@angular/core';
import { PopupsService } from './services/popups.service';
import { animate, trigger, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('slideInOut', [

      state('out', style({
        width: '60%'})),

      state('in', style({
        width: '0',
        display: 'none'})),

      transition('in => out', animate('0.6s ease')),
      transition('out => in', animate('0.6s ease'))
    ]),
    trigger('darken',[

      state('out', style({
        filter: 'brightness(20%)'})),

      state('in', style({
        })),

      transition('in => out', animate('0.6s ease')),
      transition('out => in', animate('0.6s ease'))
    ])
  ]
})

export class AppComponent {
  title = 'intro-section-with-dropdown-navigation';

  constructor(private popup : PopupsService){}

  public isSideBarVisible : boolean = false;

  private isFeatureClicked : boolean = false;

  private isCompanyClicked : boolean = false;

  private isSidebarInUse = false;

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

  // sets the isIsSidebarInUse value
  public setIsSidebarInUse() : void{
    this.isSidebarInUse = !this.isSidebarInUse;
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

  // gets the isIsSidebarInUse value
  public getIsSidebarInUse() : boolean{
    return this.isSidebarInUse;
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
      }
      else{
        this.setIsSidebarInUse();
        console.log('sidebar in use');
      }
      
    }
    //if all is already closed, do nothing
    else{
      console.log("not active, so no need to close");
    }
    
  }

}
