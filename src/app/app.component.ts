import { Component, ViewChild } from '@angular/core';

import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatRipple) ripple: MatRipple;

  triggerRipple() {
    const point1 = this.ripple.launch(0, 0, { color: 'pink', centered: true, persistent: true, radius: 50 });
    const point2 = this.ripple.launch(0, 0, { color: 'yellow', centered: true, persistent: true, radius: 20 });

    setTimeout(() => {
      point1.fadeOut();
      // point2.fadeOut();
    }, 500);
  }

  clearRipple() {
    this.ripple.fadeOutAll();
  }
}
