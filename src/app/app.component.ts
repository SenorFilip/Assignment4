import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // onStartButtonPress(buttonPressData: {number: number}) {
  onStartButtonPress(buttonPressData: number) {
    buttonPressData % 2 === 0 ?
      this.evenNumbers.push(buttonPressData) :
      this.oddNumbers.push(buttonPressData);
    // console.log('odd: ' + this.oddNumbers + ' even: ' + this.evenNumbers);
  }

}
