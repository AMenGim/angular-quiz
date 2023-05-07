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

  questions!: Question[];
  answers: number[] = [];
  roundResults!: [];
  numCorrect: number = 0;
  numIncorrect: number = 0;
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
    this.roundResults = [];
    for (let i = 0; i < this.roundsForm.controls['rounds'].value; i++) {
      const roundQuestions = this.generateRandomQuestions(
        this.roundsForm.controls['questionsPerRound'].value
      );
      this.questions.push(...roundQuestions);
      //this.roundResults.push([null]);
    }
    this.isQuizDefined = true;
    this.currentQuestion =
      this.getQuestionById(this.questions[this.currentQuestionIndex].id) ??
      quiz[0];
    this.currentQuestionIndex++;
  }

  getQuestionById(id: number): Question | undefined {
    return quiz[id];
  }

  // submitAnswers(roundIndex: number, answers: OptionEnum[]): void {
  //   const roundResult = this.roundResults[roundIndex];
  //   for (let i = 0; i < answers.length; i++) {
  //     const answer = answers[i];
  //     const question =
  //       this.questions[
  //         roundIndex * this.roundsForm.controls['questionsPerRound'].value + i
  //       ];
  //     if (answer === question.solution) {
  //       roundResult[0]++;
  //     } else {
  //       roundResult[1]++;
  //     }
  //   }
  // }

  move(isNext: boolean) {
    const globalIndex =
      this.roundsForm.controls['questionsPerRound'].value * this.currentRound +
      this.currentQuestionIndex;
    this.submitAnswer(globalIndex);
    isNext ? this.currentQuestionIndex++ : this.currentQuestionIndex--;
    this.currentQuestion =
      this.getQuestionById(this.questions[this.currentQuestionIndex].id) ??
      quiz[0];

    //? SEt prev answer
    //this.selectionInput?.nativeElement.value = this.answers[globalIndex - 1]
  }

  submitAnswer(globalIndex: number): void {
    const roundResult = this.roundResults[this.currentRound];
    const selectedValue = this.selectionInput?.nativeElement.value;

    this.foo_text =
      'globalIndex ->  ' +
      globalIndex +
      ' answers ->  ' +
      this.answers +
      ' question ->  ' +
      JSON.stringify(this.currentQuestion) +
      ' selectedValue ->  ' +
      selectedValue +
      ' ///';

    // if (selectedValue == this.currentQuestion.solution) {
    //   roundResult[0]++;
    // } else {
    //   roundResult[1]++;
    // }

    if (this.answers.length < globalIndex) {
      this.answers.push(...selectedValue);
    } else {
      this.answers[globalIndex - 1] = selectedValue;
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
    this.currentQuestionIndex = 0;
    this.numCorrect = 0;
    this.numIncorrect = 0;
    const index =
      this.currentRound * this.roundsForm.controls['questionsPerRound'].value;
    this.currentQuestion =
      this.getQuestionById(this.questions[index].id) ?? quiz[0];
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
