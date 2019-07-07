import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService) {

  }

  canActivate( route: ActivatedRouteSnapshot) {

  }
}
