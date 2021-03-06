import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Error404Component } from 'src/app/errors/error404/error404.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
