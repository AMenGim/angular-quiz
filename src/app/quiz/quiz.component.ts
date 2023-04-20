import { Component, OnInit } from '@angular/core';

import { Question, quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quiz = quiz;
  selectedQuestion!: Question;

  ngOnInit() {
    this.selectedQuestion = quiz[Math.floor(Math.random() * quiz.length)];
  }

  share() {
    window.alert('The product has been shared!');
  }
}
