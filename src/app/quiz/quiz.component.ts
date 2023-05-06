import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { OptionEnum, Question, quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  @ViewChild('selectionInput') selectionInput: ElementRef | undefined;
  quiz = quiz;
  roundsForm!: FormGroup;
  isQuizDefined: boolean = false;

  selectedQuestion!: Question;
  questions!: Question[];
  roundResults!: number[][];
  numCorrect: number = 0;
  numIncorrect: number = 0;
  currentRound: number = 0;
  currentQuestion!: Question;
  foo_text: string = 'foo';

  constructor(private fb: ReactiveFormsModule) {
    this.roundsForm = new FormGroup({
      rounds: new FormControl<number>(0, [
        Validators.min(1),
        Validators.max(5),
      ]),
      questionsPerRound: new FormControl<number>(0, [
        Validators.min(18),
        Validators.max(65),
      ]),
    });
  }

  submitForm() {
    this.initQuiz();
  }

  initQuiz(): void {
    // generar preguntas aleatorias para cada ronda
    this.questions = [];
    this.roundResults = [];
    for (let i = 0; i < this.roundsForm.controls['rounds'].value; i++) {
      const roundQuestions = this.generateRandomQuestions(
        this.roundsForm.controls['questionsPerRound'].value
      );
      this.questions.push(...roundQuestions);
      this.roundResults.push([0, 0]);
    }
    this.isQuizDefined = true;
    this.currentQuestion =
      this.getQuestionById(this.roundResults[0][0]) ?? quiz[0];
  }

  generateRandomQuestions(numQuestions: number): Question[] {
    const questions = [];
    const usedIds = new Set();
    while (questions.length < numQuestions) {
      let randomId;
      if (usedIds.size < this.quiz.length) {
        do {
          randomId = Math.floor(Math.random() * this.quiz.length) + 1;
        } while (usedIds.has(randomId));
      } else {
        usedIds.clear();
        randomId = Math.floor(Math.random() * this.quiz.length) + 1;
      }
      const question = this.getQuestionById(randomId);
      if (question) {
        questions.push(question);
        usedIds.add(randomId);
      }
    }
    return questions;
  }

  getQuestionById(id: number): Question | undefined {
    return quiz[id];
  }

  submitAnswers(roundIndex: number, answers: OptionEnum[]): void {
    const roundResult = this.roundResults[roundIndex];
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      const question =
        this.questions[
          roundIndex * this.roundsForm.controls['questionsPerRound'].value + i
        ];
      if (answer === question.solution) {
        roundResult[0]++;
      } else {
        roundResult[1]++;
      }
    }
  }

  submitAnswer(): void {
    const roundResult = this.roundResults[this.currentRound];
    const question = this.currentQuestion;
    const selectedValue = this.selectionInput?.nativeElement.value;

    this.foo_text =
      ' roundResult ->  ' +
      roundResult +
      ' question ->  ' +
      JSON.stringify(question) +
      ' selectedValue ->  ' +
      selectedValue +
      ' ///';

    if (selectedValue == question.solution) {
      roundResult[0]++;
    } else {
      roundResult[1]++;
    }
  }

  reviewAnswers(roundIndex: number): void {
    const roundQuestions = this.questions.slice(
      roundIndex * this.roundsForm.controls['questionsPerRound'].value,
      (roundIndex + 1) * this.roundsForm.controls['questionsPerRound'].value
    );
    const roundAnswers = this.roundResults[roundIndex];
    // Mostrar las preguntas y respuestas correctas e incorrectas al usuario
  }

  startNewRound() {
    this.currentRound++;
    this.numCorrect = 0;
    this.numIncorrect = 0;
    //this.usedQuestions = [];
    this.loadQuestion();
  }

  loadQuestion() {
    //   const availableQuestions = this.questions.filter(question => !this.usedQuestions.includes(question.id));
    //   if (availableQuestions.length === 0) {
    //     this.currentQuestion = null;
    //     return;
    //   }
    //   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    //   const question = availableQuestions[questionIndex];
    //   this.currentQuestion = question;
    //   this.usedQuestions.push(question.id);
    //   this.selectedOption = null;
  }
}
