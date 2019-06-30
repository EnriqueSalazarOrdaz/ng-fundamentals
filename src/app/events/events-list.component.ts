import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor='let event of events'>
          <event-thumbnail #thumbnail [event]='event'
            (eventClick)='handleEventClick($event)'></event-thumbnail>
        </div>
      </div>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()" >Log me some foo</button>
    </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private clientEventService: EventService) {

  }
  ngOnInit(): void {
    this.events = this.clientEventService.getEvents();
  }


  handleEventClick(data) {
    console.log('Data:', data);
  }



}
