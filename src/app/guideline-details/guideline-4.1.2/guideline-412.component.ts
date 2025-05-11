import { Component, OnInit } from '@angular/core';
import { GuidelinesService } from '../../services/guidelines.service';

@Component({
  selector: 'app-guideline-412',
  imports: [],
  templateUrl: './guideline-412.component.html',
  styleUrl: './guideline-412.component.css',
})
export class Guideline412Component {
  fulfilled = false;

  constructor(private guidelinesService: GuidelinesService) {}

  ngOnInit() {
    this.guidelinesService
      .getFulfilledState('4.1.2')
      .subscribe((state) => (this.fulfilled = state));
  }

  onFulfilledChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.fulfilled = checked; // Update local state immediately
    this.guidelinesService.setFulfilledState('4.1.2', checked);
  }
}
