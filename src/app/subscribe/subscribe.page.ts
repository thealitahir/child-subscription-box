import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribeComponent {
  selectedGender: string = 'Boy'
  dateOptions = Array.from({ length: 31 }, (_, i) => i + 1);
  monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  yearOptions = Array.from({ length: 18 }, (_, i) => i + 2006);
  gradeOptions = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
  ];
  selectedTopics: string[] = [];
  isAlertOpen: boolean = false;
  maxTopicsAlertHeader: string = 'Maximum Topics Selected';
  maxTopicsAlertMessage: string = 'You can only select up to 3 topics.';
  submitAlertHeader: string = 'Subscription Submitted';
  submitAlertMessage: string = 'Thank you for subscribing!';
  alertHeading: string = '';
  alertMessage: string = '';
  alertButtons = ['OK'];

  constructor(private router: Router) {}

  getGenderFieldIcon(gender: string) {
    return gender === this.selectedGender ? "../../assets/checked.svg" : "../../assets/unchecked.svg";
  }

  selectGender(gender: string) {
    this.selectedGender = gender;
  }

  isGenderSelected(gender: string) {
    return this.selectedGender === gender;
  }

  isTopicSelected(topic: string): boolean {
    return this.selectedTopics.includes(topic);
  }

  selectTopic(topic: string) {
    if (this.selectedTopics.includes(topic)) {
      this.selectedTopics.splice(this.selectedTopics.indexOf(topic), 1);
    } else if (this.selectedTopics.length === 3) {
      this.isAlertOpen = true;
      this.alertHeading = this.maxTopicsAlertHeader;
      this.alertMessage = this.maxTopicsAlertMessage;
    } else {
      this.selectedTopics.push(topic);
    }
  }

  setIsAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  handleSubmit() {
    this.isAlertOpen = true;
    this.alertHeading = this.submitAlertHeader;
    this.alertMessage = this.submitAlertMessage;
  }
}
