import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Question, quiz, Round } from '../quiz';

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

  questions!: Question[];
  answers: number[] = [];
  results!: Round[];
  currentRound: number = 0;
  currentQuestionIndex: number = 0;
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
    this.results = [];
    for (let i = 0; i < this.roundsForm.controls['rounds'].value; i++) {
      const roundQuestions = this.generateRandomQuestions(
        this.roundsForm.controls['questionsPerRound'].value
      );
      this.questions.push(...roundQuestions);
      this.results.push({ ok: 0, ko: 0 });
    }
    this.isQuizDefined = true;
    this.currentQuestion = this.getQuestionById(
      this.questions[this.currentQuestionIndex].id
    );
    this.currentQuestionIndex++;
  }

  getQuestionById(id: number): Question {
    return quiz[id];
  }

  move(isNext: boolean) {
    const globalIndex =
      this.roundsForm.controls['questionsPerRound'].value * this.currentRound +
      this.currentQuestionIndex;
    this.submitAnswer(globalIndex);
    isNext ? this.currentQuestionIndex++ : this.currentQuestionIndex--;
    this.currentQuestion = this.getQuestionById(
      this.questions[this.currentQuestionIndex].id
    );

    //? SEt prev answer
    //this.selectionInput?.nativeElement.value = this.answers[globalIndex - 1]
  }

  submitAnswer(globalIndex: number): void {
    const roundResult = this.results[this.currentRound];
    const selectedValue = this.selectionInput?.nativeElement.value;

    if (selectedValue == this.currentQuestion.solution) {
      roundResult.ok++;
    } else {
      roundResult.ko++;
    }

    if (this.answers.length < globalIndex) {
      this.answers.push(...selectedValue);
    } else {
      this.answers[globalIndex - 1] = selectedValue;
    }

    this.foo_text =
      'roundResult ->  ' +
      roundResult +
      'globalIndex ->  ' +
      globalIndex +
      ' answers ->  ' +
      this.answers +
      ' question ->  ' +
      JSON.stringify(this.currentQuestion) +
      ' selectedValue ->  ' +
      selectedValue +
      ' ///';
  }

  endRound() {}

  reviewAnswers(roundIndex: number): void {
    const roundQuestions = this.questions.slice(
      roundIndex * this.roundsForm.controls['questionsPerRound'].value,
      (roundIndex + 1) * this.roundsForm.controls['questionsPerRound'].value
    );
    const roundAnswers = this.results[roundIndex];
    // Mostrar las preguntas y respuestas correctas e incorrectas al usuario
  }

  startNewRound() {
    this.currentRound++;
    this.currentQuestionIndex = 0;
    const index =
      this.currentRound * this.roundsForm.controls['questionsPerRound'].value;
    this.currentQuestion = this.getQuestionById(this.questions[index].id);
  }

  private generateRandomQuestions(numQuestions: number): Question[] {
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
}
