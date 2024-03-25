import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  public teamMates = ["Anna de Parmas", "Frank Bell", "Justin Manley", "Natalie Morales"]
}
