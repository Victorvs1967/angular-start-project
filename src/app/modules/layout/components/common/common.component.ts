import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  template: '<p>common works!</p>',
})
export class CommonComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {}

  reloadComponent(self: boolean, urlToNavigateTo?: string) {

    const url = self ? this.router.url : urlToNavigateTo;

    this.router.navigateByUrl('/', { skipLocationChange: true  })
      .then(() => this.router.navigate(['/'.concat(url || '')]));
  }

  reloadPage() {
    window.location.reload();
  }
}
