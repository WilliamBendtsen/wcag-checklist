import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../services/guidelines.service';
import { Guideline } from '../models/guideline.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-wcag-guidelines',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wcag-guidelines.component.html',
  styleUrls: ['./wcag-guidelines.component.css'],
})
export class WcagGuidelinesComponent implements OnInit {
  guidelines: Guideline[] = [];

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit(): void {
    this.guidelines = this.guidelinesService.getAllGuidelines();
  }
}
