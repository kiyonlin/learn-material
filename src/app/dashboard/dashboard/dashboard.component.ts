import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer, ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bidiMode = 'ltr';
  theme = 'custom-theme-2';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private overlayContainer: OverlayContainer,
    private scrollDispatcher: ScrollDispatcher
  ) { }

  ngOnInit() {
    // const isSmallScreen = this.breakpointObserver.isMatched('(max-width:599px)');
    // console.log(`小螢幕(600px以下)？${isSmallScreen}`);

    this.breakpointObserver.observe('(orientation: portrait)').subscribe(result => {
      console.log(`portrait: ${result.matches}`);
    });

    this.breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        console.log(`Handset: ${result.matches}`);
      });

    this.breakpointObserver.observe('(orientation: landscape)').subscribe(result => {
      console.log(`landscape: ${result.matches}`);
    });

    this.overlayContainer.getContainerElement().classList.add(this.theme);

    console.log(this.scrollDispatcher.scrollContainers);
    this.scrollDispatcher.scrolled(1000).subscribe((scrollable: CdkScrollable) => {
      console.log('發生scroll了，來源為：');
      console.log(scrollable.getElementRef());
    });
  }

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
    });
  }

  opened() {
    console.log('芝麻開門');
  }

  closed() {
    console.log('芝麻關門');
  }

  logDirChange($event: Direction) {
    console.log(`dir被改變了 => ${$event}`);
  }

  toggleTheme() {
    const originalTheme = this.theme;
    this.theme = this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
}