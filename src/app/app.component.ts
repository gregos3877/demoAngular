import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [new Post('Mon Premier Post', 'Lorem ipsum ...', 5 ),
           new Post('Mon Deuxième Post', 'Lorem ipsum ...', -5),
           new Post('Un Autre Post', 'Lorem ipsum ...', 0),
           new Post('Et Encore un petit', 'Il existe plusieurs post', 88)];

  constructor() {}
}
