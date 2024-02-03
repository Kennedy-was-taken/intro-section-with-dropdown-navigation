import { Component } from '@angular/core';
import { PopupsService } from '../services/popups.service';

@Component({
  selector: 'app-mobile-slidebar',
  templateUrl: './mobile-slidebar.component.html',
  styleUrl: './mobile-slidebar.component.scss'
})
export class MobileSlidebarComponent {

  constructor(private popup : PopupsService){}
  
  private isFeatureClicked : boolean = false;

  private isCompanyClicked : boolean = false;

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

  // gets the isFeatureClicked value
  public getFeatureClicked() : boolean{
    return this.isFeatureClicked;
  }
  
  // gets the isCompanyClicked value
  public getCompanyClicked() : boolean{
    return this.isCompanyClicked;
  }
}
