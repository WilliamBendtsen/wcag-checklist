import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';

interface GuidelineGroup {
  category: string;
  items: Guideline[];
}

@Component({
  selector: 'app-history',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  groupedGuidelines: GuidelineGroup[] = [];
  pageName = 'history';

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
    }

    this.groupedGuidelines = Object.entries(grouped).map(
      ([category, items]) => ({
        category,
        items,
      })
    );
  }

  onFulfilledChange(guideline: any, event: Event) {
    guideline.fulfilled = (event.target as HTMLInputElement).checked;
  }
}
