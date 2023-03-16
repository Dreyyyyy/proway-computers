import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  description="";

  constructor(private router: Router) {

  }

  search() {
    if (this.description) {
      this.router.navigate(["products"], { queryParams: { description: this.description }});
      return;
    }

    this.router.navigate(["products"]);
  }
}
