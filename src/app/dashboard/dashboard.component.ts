import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';
import { NgClass, NgFor, NgIf } from '@angular/common';

interface GuidelineGroup {
  category: string;
  items: Guideline[];
}

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf, RouterLink, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  groupedGuidelines: GuidelineGroup[] = [];
  collapsedGroups: { [category: string]: boolean } = {};
  pageName = 'dashboard';

  constructor(
    private route: ActivatedRoute,
    private guidelinesService: GuidelinesService
  ) {}

  ngOnInit(): void {
    const guidelines = this.guidelinesService.getGuidelinesForPage(
      this.pageName
    );

    const grouped: { [category: string]: Guideline[] } = {};

    for (const g of guidelines) {
      if (!g.category) continue;
      if (!grouped[g.category]) {
        grouped[g.category] = [];
      }
      grouped[g.category].push(g);

      // Subscribe to fulfilled state for each guideline
      this.guidelinesService
        .getFulfilledState(g.id)
        .subscribe((state) => (g.fulfilled = state));
    }

    this.groupedGuidelines = Object.entries(grouped).map(
      ([category, items]) => ({
        category,
        items,
      })
    );

    this.groupedGuidelines.forEach((group) => {
      this.collapsedGroups[group.category] = false;
    });
  }

  toggleGroup(category: string): void {
    this.collapsedGroups[category] = !this.collapsedGroups[category];
  }

  onFulfilledChange(guideline: Guideline, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    // Update the local guideline object immediately
    guideline.fulfilled = checked;
    // Then update the service state
    this.guidelinesService.setFulfilledState(guideline.id, checked);
  }
}
