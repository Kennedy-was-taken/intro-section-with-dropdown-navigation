import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor() { }

  private isSideBarVisible : boolean = false;

  private isFeatureClicked : boolean = false;

  private isCompanyClicked : boolean = false;

  // sets the sidebars value
  public setSideBarVisible(value : boolean) : void{
    this.isSideBarVisible = value;
  }

  // sets the feature value
  public setFeatureValue(value : boolean) : void{
    this.isFeatureClicked = value;
  }

  // sets the Company value
  public setCompanyValue(value : boolean) : void{
    this.isCompanyClicked = value;
  }

  // gets the sidebars value
  public getSideBarVisible() : boolean{
    return this.isSideBarVisible;
  }

  // gets the feature value
  public getFeatureValue() : boolean{
    return this.isFeatureClicked;
  }

  // gets the Company value
  public getCompanyValue() : boolean{
    return this.isCompanyClicked;
  }
  
}
