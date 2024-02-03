import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';


@Directive({
  selector: '[appClickOutside]'
})

export class ClickOutsideDirective implements AfterViewInit, OnDestroy{

  //inject access to the element reference and the DOM reference
  constructor(private element : ElementRef, @Inject(DOCUMENT) private document: Document) { }

  @Output() clickOutside = new EventEmitter<void>();

  documentClickDestroy : Subscription | undefined;

  ngAfterViewInit(): void {
    this.documentClickDestroy = fromEvent(this.document, 'click').pipe(filter((event) => {
      return !this.isInside(event?.target as HTMLElement)}
    )).subscribe(() => {
      this.clickOutside.emit();
    });
  }

  ngOnDestroy(): void {
      this.documentClickDestroy?.unsubscribe;
  };

  isInside(elementToCheck : HTMLElement) : boolean{
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck);
  }
}
