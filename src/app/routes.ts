import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/events-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' },


]
