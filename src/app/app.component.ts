import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers = [];
  evenNumbers = [];

  onStartButtonPress(buttonPressData: {number: number}) {
    buttonPressData.number % 2 === 0 ?
      this.evenNumbers.push(buttonPressData.number) :
      this.oddNumbers.push(buttonPressData.number);
    console.log('odd: ' + this.oddNumbers + ' even: ' + this.evenNumbers);
  }

}
