import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';

@Component({
  selector: 'app-guideline-111',
  imports: [],
  templateUrl: './guideline-111.component.html',
  styleUrl: './guideline-111.component.css',
})
export class Guideline111Component implements OnInit {
  fulfilled = false;

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('1.1.1')
      .subscribe((state) => (this.fulfilled = state));
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('1.1.1', checked);
  }
}
