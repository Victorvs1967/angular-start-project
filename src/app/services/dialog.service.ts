import { ComponentType } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialog = inject(MatDialog);
  private static instance: DialogService | null = null;

  constructor() {
    DialogService.instance = this;
  }

  public static getInstance() {
    return DialogService.instance;
  }

  openDialog<T>(data: any, component: ComponentType<T>, width = '600px') {
    return this.dialog.open(component, {
      width: width,
      maxHeight: '90vh',
      data: data,
      disableClose: true,
    })
    .afterClosed();
  }
}
