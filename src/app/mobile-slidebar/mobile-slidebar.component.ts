import { Component } from '@angular/core';
import { PopupsService } from '../services/popups.service';
import { animate, trigger, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-mobile-slidebar',
  templateUrl: './mobile-slidebar.component.html',
  styleUrl: './mobile-slidebar.component.scss',
  animations : [
    trigger('slideInOut', [

      state('out', style({
        wordWrap:'break-word'
      })),

      state('in', style({
        display: 'none',
        height: '0px'
      })),

      transition('in => out', animate('0.6s ease')),
      transition('out => in', animate('0.6s ease'))
    ]),
    trigger('p', [

      state('out', style({
        display: 'flex'
      })),

      state('in', style({
        display: 'none'
      })),

      transition('in => out', animate('0.6s ease')),
      transition('out => in', animate('0.6s ease'))
    ])
  ]
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
    this.popup.setCompanyValue(!this.isCompanyClicked);
    this.isCompanyClicked = this.popup.getCompanyValue();
  }

  // gets the isFeatureClicked value
  public getFeatureClicked() : boolean{
    console.log(this.isFeatureClicked);
    return this.isFeatureClicked;
  }
  
  // gets the isCompanyClicked value
  public getCompanyClicked() : boolean{

    console.log(this.isCompanyClicked);
    return this.isCompanyClicked;
  }

  // all drop downs and sidebar closes
  clickedOutside(): void {
    this.isCompanyClicked = false;
    this.isFeatureClicked = false;
    this.popup.restoreDefaultValues();
  }
}
