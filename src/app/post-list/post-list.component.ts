import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: string;
  @Input() postCreated: string;

  constructor() { }

  ngOnInit() {
  }


}
