import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // @Output() gameStarted = new EventEmitter<{number: number}>();
  @Output() gameStarted = new EventEmitter<number>();
  incrementingNumberEvent;
  incrementingNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onEachSecondEvent() {
    console.log(this.incrementingNumber);
  }

  onStartButtonClick() {
    this.incrementingNumberEvent =
      setInterval(() => {
        // this.onEachSecondEvent();
        this.incrementingNumber++;
        // this.gameStarted.emit({ number: this.incrementingNumber });
        this.gameStarted.emit(this.incrementingNumber);
        }, 1000);
  }

  onStopButtonClick() {
    // this.incrementingNumberEvent = clearInterval(this.incrementingNumberEvent);
    clearInterval(this.incrementingNumberEvent);
  }

}
