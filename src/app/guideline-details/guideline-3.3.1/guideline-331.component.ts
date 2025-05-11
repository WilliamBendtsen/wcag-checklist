import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';

@Component({
  selector: 'app-guideline-331',
  imports: [],
  templateUrl: './guideline-331.component.html',
  styleUrl: './guideline-331.component.css',
})
export class Guideline331Component {
  fulfilled = false;

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('3.3.1')
      .subscribe((state) => (this.fulfilled = state));
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('3.3.1', checked);
  }
}
