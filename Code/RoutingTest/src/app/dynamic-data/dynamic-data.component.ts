import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.css'],
})
export class DynamicDataComponent implements OnInit {
  queryParams: Params;
  params: Params;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((data) => {
      this.params = data;
    });

    this.route.queryParams.subscribe((data) => {
      this.queryParams = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
