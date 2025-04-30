import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';
import { NgFor, NgIf } from '@angular/common';

interface GuidelineGroup {
  category: string;
  items: Guideline[];
}

@Component({
  selector: 'app-user-accounts',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './user-accounts.component.html',
  styleUrl: './user-accounts.component.css',
})
export class UserAccountsComponent implements OnInit {
  groupedGuidelines: GuidelineGroup[] = [];
  pageName = 'user-accounts';

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
}
