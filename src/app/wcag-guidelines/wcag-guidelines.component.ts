import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GuidelineGroup {
  category: string;
  items: Guideline[];
}

@Component({
  selector: 'app-wcag-guidelines',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './wcag-guidelines.component.html',
  styleUrls: ['./wcag-guidelines.component.css'],
})
export class WcagGuidelinesComponent implements OnInit {
  groupedGuidelines: GuidelineGroup[] = [];

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit(): void {
    const guidelines = this.guidelinesService.getAllGuidelines();

    const groups: { [category: string]: Guideline[] } = {};

    for (const g of guidelines) {
      if (!groups[g.category!]) {
        groups[g.category!] = [];
      }
      groups[g.category!].push(g);
    }

    this.groupedGuidelines = Object.entries(groups).map(
      ([category, items]) => ({
        category,
        items,
      })
    );
  }
}
