import { Component } from '@angular/core';
import { PopupsService } from './services/popups.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intro-section-with-dropdown-navigation';

  constructor(private popup : PopupsService){}

  life : Boolean = false

  private isSideBarVisible : boolean = false;

  private isFeatureClicked : boolean = false;

  private isCompanyClicked : boolean = false;

  // sets the isSideBarVisible value
  public openSideMenu() : void{
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
    this.popup.setFeatureValue(!this.isCompanyClicked);
    this.isCompanyClicked = this.popup.getCompanyValue();
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

  showMe() : void{
    this.life = !this.life;
  }

  clickedOutside(): void {
    this.life = false;
  }
}
