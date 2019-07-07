import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Injectable({ providedIn: 'root' })
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params.id);
    if (!eventExist) {
      this.router.navigate(['404']);
    }
    return eventExist;
  }
}
