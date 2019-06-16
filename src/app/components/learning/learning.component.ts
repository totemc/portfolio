import { Component, OnInit } from '@angular/core';
import { LearningService } from './learning.service';
@Component({
  selector: 'site-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.sass']
})
export class LearningComponent implements OnInit {
  private cards;
  constructor(private learningService: LearningService) { }

  ngOnInit() {
    this.learningService.getLearning().subscribe(
      learnings => {
        this.cards = learnings.slice(0,3);
      }
    );
  }

}
