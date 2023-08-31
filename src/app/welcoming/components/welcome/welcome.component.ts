import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;

  get fullName(): string {
    return this.firstName == '' || this.lastName == '' ? 'Unknown' : `${this.firstName} ${this.lastName}`;
  }

}
