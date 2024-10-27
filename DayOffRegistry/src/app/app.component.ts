import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DayOffListComponent } from "./day-off-list/day-off-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayOffListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DayOffRegistry';
}
