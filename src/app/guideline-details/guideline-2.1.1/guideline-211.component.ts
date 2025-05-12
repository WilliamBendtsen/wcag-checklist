import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';
import { Guideline } from '../../models/guideline.model';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-guideline-211',
  imports: [NgFor, RouterLink],
  templateUrl: './guideline-211.component.html',
  styleUrl: './guideline-211.component.css',
})
export class Guideline211Component implements OnInit {
  fulfilled = false;
  guidelines: Guideline[] = [];
  sourcePage: string = '';
  pageTitle: string = '';

  constructor(
    private guidelinesService: GuidelinesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('2.1.1')
      .subscribe((state) => (this.fulfilled = state));

    // Get the source page from the query params
    this.route.queryParams.subscribe((params) => {
      this.sourcePage = params['from'] || 'dashboard';
      this.pageTitle = this.sourcePage
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      this.guidelines = this.guidelinesService.getGuidelinesForPage(
        this.sourcePage
      );
    });
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('2.1.1', checked);
  }
}
