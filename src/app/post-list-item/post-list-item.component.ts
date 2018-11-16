import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated: string;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    console.log('Une Personne de plus qui aime !');
    this.postLoveIts++;

  }

  onDontLove() {
    console.log('Aie, cette personne n\'aime pas du tout');
        this.postLoveIts--;
  }

}
