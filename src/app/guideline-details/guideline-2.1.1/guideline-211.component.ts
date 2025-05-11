import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';

@Component({
  selector: 'app-guideline-211',
  imports: [],
  templateUrl: './guideline-211.component.html',
  styleUrl: './guideline-211.component.css',
})
export class Guideline211Component {
  fulfilled = false;

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('2.1.1')
      .subscribe((state) => (this.fulfilled = state));
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('2.1.1', checked);
  }
}
