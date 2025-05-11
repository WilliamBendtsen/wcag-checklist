import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';

@Component({
  selector: 'app-guideline-243',
  imports: [],
  templateUrl: './guideline-243.component.html',
  styleUrl: './guideline-243.component.css',
})
export class Guideline243Component {
  fulfilled = false;

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('2.4.3')
      .subscribe((state) => (this.fulfilled = state));
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('2.4.3', checked);
  }
}
