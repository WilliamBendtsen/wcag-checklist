import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  guidelines: Guideline[] = [];
  pageName = '';

  constructor(
    private route: ActivatedRoute,
    private guidelinesService: GuidelinesService
  ) {}

  ngOnInit(): void {
    this.pageName = this.route.snapshot.routeConfig?.path || '';
    this.guidelines = this.guidelinesService.getGuidelinesForPage(
      this.pageName
    );
  }
}
