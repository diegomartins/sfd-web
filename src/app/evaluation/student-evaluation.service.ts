import { Injectable } from '@angular/core';
import { IStudentEvaluation } from '../shared/model/student-evaluation.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentEvaluationService {

  constructor() {}

  registerStudentEvaluation(evaluation: IStudentEvaluation) {
    console.log("Registering student evaluation", evaluation);
  }
}
