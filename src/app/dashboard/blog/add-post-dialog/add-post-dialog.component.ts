import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddPostConfirmDialogComponent } from '../add-post-confirm-dialog/add-post-confirm-dialog.component';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {
  title: string;

  constructor(private dialogRef: MatDialogRef<AddPostDialogComponent>, private dialog: MatDialog) { }

  ngOnInit() {
  }

  doPost() {
    this.dialog.open(AddPostConfirmDialogComponent, {
      // height、width、minHeight、minWidth、maxHeight maxWidth autoFocus
      data: {
        title: this.title
      },
      hasBackdrop: true,
      autoFocus: false
    })
  }
  move() {
    this.dialogRef.updatePosition({
      top: '0',
      left: '0'
    });
  }
}
