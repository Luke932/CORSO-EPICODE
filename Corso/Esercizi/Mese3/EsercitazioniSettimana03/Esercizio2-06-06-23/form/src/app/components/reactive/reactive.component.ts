import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  formContainer!: FormGroup;
  heroesDetect = ['Ironman', 'Spiderman', 'Thor'];

  constructor(private fb: FormBuilder) {}

validHeroes = (heroesF: FormControl) => {
  if (!this.heroesDetect.includes(heroesF.value)) {
    return { heroesDet: true };
  }
  return null;
}

  ngOnInit(): void {

    this.formContainer = this.fb.group({
      heroesInfo: this.fb.group({
        heroesName: this.fb.control(null, [Validators.required, this.validHeroes]),
        alterEgo: this.fb.control(null, [Validators.required, this.validHeroes]),
        select: this.fb.control(null, [Validators.required, this.validHeroes]),
        enemy: this.fb.control(null, [Validators.required, this.validHeroes]),
        planet: this.fb.control(null, [Validators.required, this.validHeroes]),
        power: this.fb.array([]), // spostato all'interno di heroesInfo
        weakness: this.fb.array([]) // spostato all'interno di heroesInfo
      }),
    });
  }

  getErrorsC(name: string, error: string) {
    return this.formContainer.get(name)?.errors![error];
  }

  getHeroesF(name: string) {
    return this.formContainer.get(name);
  }

  getPower() {
    return (this.formContainer.get('heroesInfo.power') as FormArray).controls;
  }

  addPower() {
    const control = this.fb.control(null);
    (this.formContainer.get('heroesInfo.power') as FormArray).push(control);
    console.log(this.getPower());
  }

  getWeakness() {
    return (this.formContainer.get('heroesInfo.weakness') as FormArray).controls;
  }

  addWeakness() {
    const control = this.fb.control(null);
    (this.formContainer.get('heroesInfo.weakness') as FormArray).push(control);
    console.log(this.getWeakness());
  }

  submitForms() {
    console.log(this.formContainer);
    console.log('Form correttamente inviato');
    this.formContainer.reset();
  }
}
