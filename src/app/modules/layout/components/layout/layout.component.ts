import { Component, inject } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
  dialog = inject(DialogService);
}
