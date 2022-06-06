import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-preview-large',
  templateUrl: './article-preview-large.component.html',
  styleUrls: ['./article-preview-large.component.scss']
})
export class ArticlePreviewLargeComponent implements OnInit {
  @Input()
  article: any;

  constructor() { }

  ngOnInit(): void {
  }

}
