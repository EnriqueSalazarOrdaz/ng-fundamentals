import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor='let event of events'>
          <app-event-thumbnail #thumbnail [event]='event'
            (click)='handleThumbnailClick(event.name)'></app-event-thumbnail>
        </div>
      </div>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()" >Log me some foo</button>
    </div>
  `,
  styles: []
})

export class EventsListComponent implements OnInit {
  events: any;
  constructor(private clientEventService: EventService, private toastr: ToastrService,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.clientEventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data.events;

  }


  handleEventClick(data: any) {
    console.log('Data:', data);
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }

}
