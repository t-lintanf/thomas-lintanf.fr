import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewLargeComponent } from './article-preview-large.component';

describe('ArticlePreviewLargeComponent', () => {
  let component: ArticlePreviewLargeComponent;
  let fixture: ComponentFixture<ArticlePreviewLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePreviewLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePreviewLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
