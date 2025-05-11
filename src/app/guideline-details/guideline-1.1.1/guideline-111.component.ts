import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';
import { Guideline } from '../../models/guideline.model';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guideline-111',
  imports: [NgFor, RouterLink],
  templateUrl: './guideline-111.component.html',
  styleUrls: ['./guideline-111.component.css'],
})
export class Guideline111Component implements OnInit {
  fulfilled = false;
  dashboardGuidelines: Guideline[] = [];

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('1.1.1')
      .subscribe((state) => (this.fulfilled = state));

    // Get all guidelines for the dashboard page
    this.dashboardGuidelines =
      this.guidelinesService.getGuidelinesForPage('dashboard');
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('1.1.1', checked);
  }
}
