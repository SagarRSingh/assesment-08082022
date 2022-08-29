import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-container',
  templateUrl: 'dialogContainer.component.html',
})
export class DialogContainerComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'example-dialog',
  templateUrl: 'dialogComponent.dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(private dialogRef: MatDialogRef<DialogElementsExampleDialog>){}
  closeDialog(){
    this.dialogRef.close()
  }
}
