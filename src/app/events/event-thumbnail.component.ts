import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `

    <div class="well hoverwell thumbnail" >
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <div>Price: {{ event?.price | currency }}</div>
      <div>
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <button class="btn btn-primary" (click)="ClickMe()">Click me!</button>
    </div>
  `

  , styles: [`
    .thumbnail { min-height: 250px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty: string = 'some value2';

  ClickMe() {
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('hi from logFoo');
    this.someProperty = 'new value';
  }
}
