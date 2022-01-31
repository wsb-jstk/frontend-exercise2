import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-search-criteria',
  templateUrl: './book-search-criteria.component.html',
  styleUrls: ['./book-search-criteria.component.scss']
})
export class BookSearchCriteriaComponent implements OnInit {

  @Output()
  newCriteria = new EventEmitter()

  form: FormGroup = this.fb.group({
    title: ['', maxChars(4)],
    price: ['', Validators.pattern(/\d/)],
    description: '',
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  search() {
    this.newCriteria.emit(this.form.value);
  }
}

const max10Chars: ValidatorFn = (control: AbstractControl): ValidationErrors | null => control.value.length > 10 ?
  {  max10Chars: "Value is too long!"} : null;

const maxChars =(max:number) : ValidatorFn => (control: AbstractControl): ValidationErrors | null => control.value.length > max ?
  {  max10Chars: "Value is too long!"} : null;
