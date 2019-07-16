import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {
  @Input() movie: Movie
  @Output() deleteEvent = new EventEmitter<number>()


  constructor() { }

  ngOnInit() {
  }

  public onDelete(){
    this.deleteEvent.emit(this.movie.imdbID)
  }
}
