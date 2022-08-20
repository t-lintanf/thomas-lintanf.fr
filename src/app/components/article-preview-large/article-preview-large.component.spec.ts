import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ArticlePreviewLargeComponent } from './article-preview-large.component';

describe('ArticlePreviewLargeComponent', () => {
  let component: ArticlePreviewLargeComponent;
  let fixture: ComponentFixture<ArticlePreviewLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ArticlePreviewLargeComponent]
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
