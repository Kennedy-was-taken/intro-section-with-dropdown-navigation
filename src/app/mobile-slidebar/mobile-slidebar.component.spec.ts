import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSlidebarComponent } from './mobile-slidebar.component';

describe('MobileSlidebarComponent', () => {
  let component: MobileSlidebarComponent;
  let fixture: ComponentFixture<MobileSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileSlidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
