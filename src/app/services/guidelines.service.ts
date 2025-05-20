import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Guideline } from '../models/guideline.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GuidelinesService {
  private guidelines: Guideline[] = [
    {
      id: '1.1.1',
      title: 'Non-text Content',
      description:
        'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.',
      level: 'A',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.3.1',
      title: 'Info and Relationships',
      description:
        'Information, structure, and relationships conveyed through presentation can be programatically determined or are available in text',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.3.2',
      title: 'Meaningful Sequence',
      description:
        'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programatically determined',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.3.3',
      title: 'Sensory Characteristics',
      description:
        'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.3.4',
      title: 'Orientation',
      description:
        'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.3.5',
      title: 'Identify Input Purpose',
      description:
        'The purpose of each input field collecting information about the user can be programatically determined',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.1',
      title: 'Use of Color',
      description:
        'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.3',
      title: 'Contrast (Minimum)',
      description:
        'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, with a few exceptions*',
      level: 'AA',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.4',
      title: 'Resize Text',
      description:
        'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.5',
      title: 'Images of Text',
      description:
        'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text, with a few exceptions*',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.10',
      title: 'Reflow',
      description:
        'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for vertical and horizontal scrolling',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.11',
      title: 'Non-Text Contrast',
      description:
        'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s)* (User Interface Components & Graphical Objects)',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.12',
      title: 'Text Spacing',
      description:
        'In content implemented using markup languages that support the following text style properties, no loss of conten or functionality occurs by setting all of the following and by changing no other style property* (Line height, Spacing, Letter spacing, Word spacing)',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '1.4.13',
      title: 'Content on Hover Focus',
      description:
        'Where recieving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true* (Dismissible, Hoverable, Persistent)',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.1.1',
      title: 'Keyboard',
      description:
        'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the users movement, and not just the endpoints',
      level: 'A',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.1.2',
      title: 'No Keyboard Trap',
      description:
        'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.1.4',
      title: 'Character Key Shortcuts',
      description:
        'If a keyboard shortcut is implemented in content using only letter (includint upper- and lower-case letters), punctuation, number, ot symbol characters, then at least on of the following is true* (Turn off, remap, Active only on focus)',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.2.1',
      title: 'Timing Adjustable',
      description:
        'For each time limit that is set by the content, at least one of the following is true* (Turn off, Adjust, Extend, Real-time Exception)',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.2.2',
      title: 'Pause, Stop, Hide',
      description:
        'For moving, blinking, scrolling or auto-updating information, all of the following are true* (Moving blinking scrolling, Auto-updating',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.3.1',
      title: 'Three Flashes or Below',
      description:
        'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash threshholds',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.1',
      title: 'Bypass Blocks',
      description:
        'A mechanism is available to bypass blocks of content that are repeated on multiple web pages',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.2',
      title: 'Page Titled',
      description: 'Web pages have titles that describe topic or purpose',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.3',
      title: 'Focus Order',
      description:
        'If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components recieve focus in an order that preserves meaning and operability',
      level: 'A',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.4',
      title: 'Link Purpose (In Context)',
      description:
        'The purpose of each link can be determined from the link text aline or from the link text together with its programatically determined link context, except where the purpose of the link would be ambiguous to users in general',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.5',
      title: 'Multiple Ways',
      description:
        'More than ony way is available to locate a web page within a set of web pages except where the web page is the result of, or a step in, a process',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.6',
      title: 'Headings and Labels',
      description: 'Heading and labels describe topic or purpose',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.7',
      title: 'Focus Visible',
      description:
        'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.4.11',
      title: 'Focus Not Obscured (Minimum)',
      description:
        'When a user interface component revieces keyboard focus, the component is not entirely hidden due to author-created content',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.1',
      title: 'Pointer Gestures',
      description:
        'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.2',
      title: 'Pointer Cancellation',
      description:
        'For functionality that can be operated using a single pointer, at least one of the following is true* (No Down-Event, Abort or Undo, Up Reversal, Essential)',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.3',
      title: 'Label in Name',
      description:
        'For user interface components with labels that include text or images or text, the name contains the text that is presented visually',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.4',
      title: 'Motion Actuation',
      description:
        'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:* (Supported Interface, Essential)',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.7',
      title: 'Dragging Movements',
      description:
        'All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential or the functionality is determined by the user agent and not modified by the author',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '2.5.8',
      title: 'Target Size (Minimum)',
      description:
        'The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when* (Spacing, Equivalent, Inline, User Agent Control, Essential)',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.1.1',
      title: 'Language of Page',
      description:
        'The default human language of each web page can be programatically determined',
      level: 'A',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.1.2',
      title: 'Language of Parts',
      description:
        'The human language of each passage or phrase in the content can be programatically determined except for proper names, technical terms, words or indeterminate language, and words or phrases that have become part of the vernacular of the immideately surrounding text',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.2.1',
      title: 'On Focus',
      description:
        'When any user interface component recieves focus, it does not initiate a change of context',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.2.2',
      title: 'On Input',
      description:
        'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.2.3',
      title: 'Consistent Navigation',
      description:
        'Navigational mechanisms that are repeated on multiple web pages within a set of web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.2.4',
      title: 'Consistent Identification',
      description:
        'Components that have the same functionality within a set of web pages are identified consistently',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.2.6',
      title: 'Consistent Help',
      description:
        'If a web page contains any of the following help mechanisms, and those mechanisms are repeated on multiple web pages within a set of web pages, they occur in the same order relative to other page content, unless a change is initiated by the user* (Human contact details, Human contact mechanism, Self-help option, A fully automated contact mechanism)',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.3.1',
      title: 'Error Identification',
      description:
        'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text',
      level: 'A',
      applicableTo: [],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.3.2',
      title: 'Labels or Instructions',
      description:
        'Labels or instructions are provided when content requires user input',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.3.3',
      title: 'Error Suggestion',
      description:
        'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.3.7',
      title: 'Redundant Entry',
      description:
        'Information previously entered by or provided to the user that is required to be entered again in the same process is either* (Auto-populated, Available for the user to select), with a few exceptions*',
      level: 'A',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '3.3.8',
      title: 'Accessible Authentication (Minimum)',
      description:
        'A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least on of the following* (Alternative, Mechanism, Object Recognition, Personal Content)',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '4.1.2',
      title: 'Name, Role, Value',
      description:
        'For all user interface components, the name and role can be programatically determined; states, properties, and values that can be set by the user can be programatically set; and notification of changes to these items is available to user agents, including assisstive technologies',
      level: 'A',
      applicableTo: [
        'dashboard',
        'history',
        'user-accounts',
        'locations-and-printers',
        'printers',
        'connectors',
        'company-profile',
        'staff-resources',
      ],
      imageUrl: '',
      fulfilled: false,
    },
    {
      id: '4.1.3',
      title: 'Status Message',
      description:
        'In content implemented using markup languages, status messages can be programatically determined through role or properties such that they can be presented to the user by assisstive technologies without recieving focus',
      level: 'AA',
      applicableTo: ['', '', ''],
      imageUrl: '',
      fulfilled: false,
    },
  ].map((g) => ({
    ...g,
    level: g.level as 'A' | 'AA' | 'AAA',
    category: this.getCategoryById(g.id),
  }));

  private guidelineFulfilledState = new BehaviorSubject<{
    [key: string]: boolean;
  }>({});

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Initialize the BehaviorSubject with any saved state (could be from localStorage)
    const savedState = this.getSavedState();
    if (savedState) {
      this.guidelineFulfilledState.next(savedState);

      // Update the initial state of the guidelines array
      this.guidelines.forEach((guideline) => {
        guideline.fulfilled = !!savedState[guideline.id];
      });
    }
  }

  getAllGuidelines(): Guideline[] {
    return this.guidelines;
  }

  getGuidelinesForPage(page: string): Guideline[] {
    return this.guidelines.filter((g) => g.applicableTo.includes(page));
  }

  getGuidelineById(id: string): Guideline | undefined {
    return this.guidelines.find((g) => g.id === id);
  }

  getFulfilledState(guidelineId: string): Observable<boolean> {
    return new BehaviorSubject(
      this.guidelineFulfilledState.value[guidelineId] || false
    );
  }

  setFulfilledState(guidelineId: string, fulfilled: boolean) {
    const currentState = this.guidelineFulfilledState.value;
    const newState = {
      ...currentState,
      [guidelineId]: fulfilled,
    };

    this.guidelineFulfilledState.next(newState);
    this.saveState(newState);

    // Also update the guideline in the guidelines array
    const guideline = this.getGuidelineById(guidelineId);
    if (guideline) {
      guideline.fulfilled = fulfilled;
    }
  }

  private getCategoryById(
    id: string
  ): 'Perceivable' | 'Operable' | 'Understandable' | 'Robust' {
    const mainSection = id.split('.')[0];
    switch (mainSection) {
      case '1':
        return 'Perceivable';
      case '2':
        return 'Operable';
      case '3':
        return 'Understandable';
      case '4':
        return 'Robust';
      default:
        throw new Error(`Unknown guideline id prefix: ${id}`);
    }
  }

  private saveState(state: { [key: string]: boolean }) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('guidelineFulfilledState', JSON.stringify(state));
    }
  }

  private getSavedState(): { [key: string]: boolean } | null {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('guidelineFulfilledState');
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  }
}