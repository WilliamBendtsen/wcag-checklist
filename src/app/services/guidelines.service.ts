import { Injectable } from '@angular/core';
import { Guideline } from '../models/guideline.model';

@Injectable({
  providedIn: 'root', // This tells Angular to provide this service globally
})
export class GuidelinesService {
  private guidelines: Guideline[] = [
    {
      id: '1.1.1',
      title: 'Non-text Content',
      description:
        'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '/images/111-example.png',
    },
    {
      id: '1.2.1',
      title: 'Audio-only and Video-only (Pre-recorded)',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.2.2',
      title: 'Captions (Pre-recorded)',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.2.3',
      title: 'Audio Description or Media Alternative (Pre-recorded)',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.2.4',
      title: 'Captions (Live)',
      description: '',
      level: 'AA',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.2.5',
      title: 'Audio Description (Pre-recorded)',
      description: '',
      level: 'AA',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.3.1',
      title: 'Info and Relationships',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.3.2',
      title: 'Meaningful Sequence',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
    {
      id: '1.3.3',
      title: 'Sensory Characteristics',
      description: '',
      level: 'A',
      applicableTo: ['dashboard', '', ''],
      imageUrl: '',
    },
  ];

  getAllGuidelines(): Guideline[] {
    return this.guidelines;
  }

  getGuidelinesForPage(page: string): Guideline[] {
    return this.guidelines.filter((g) => g.applicableTo.includes(page));
  }
}
