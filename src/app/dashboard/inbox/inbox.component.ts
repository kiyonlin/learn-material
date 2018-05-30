import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { MatTabChangeEvent, MatButton } from '@angular/material';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  tabIndex = 0;

  @ViewChild('overlayMenuList') overlayMenuList: TemplateRef<any>;
  @ViewChild('originFab') originFab: MatButton;
  overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const strategy = this.overlay.position().connectedTo(this.originFab._elementRef, {
      originX: 'end', originY: 'top'
    }, { overlayX: 'end', overlayY: 'bottom' });
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      // backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: strategy
    });
  }

  tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus變更，indx：${$event.index}`);
  }

  tabSelectedIndexChange($event: number) {
    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }

  displayMenu() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this.overlayMenuList, this.viewContainerRef));
    }
  }
}
