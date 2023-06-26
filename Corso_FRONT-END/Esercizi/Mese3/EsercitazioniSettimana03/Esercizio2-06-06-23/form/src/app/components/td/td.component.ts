import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {
powers: string[] = ['forza', 'intelligenza', 'magia']
  title = "formTemplate";

  @ViewChild("formCenter", { static: true }) formCenter!: NgForm;

  heroesForm = {
    heroesName: "",
    alterEgo: "",
    option: "",
    enemy: "",
    planet: "",
    weakness: ""
  };

  select = "";

  heroes: any = {
    heroesName: "",
    alterEgo: "",
    select: "",
    enemy: "",
    planet: "",
    weakness: ""
  };




  submitForm() {
    console.log('Form inviato', this.formCenter);
    this.heroes.heroesName = this.formCenter.value.heroesForm.heroesName;
    this.heroes.alterEgo = this.formCenter.value.heroesForm.alterEgo;
    this.heroes.option = this.formCenter.value.heroesForm.option;
    this.heroes.enemy = this.formCenter.value.heroesForm.enemy;
    this.heroes.planet = this.formCenter.value.heroesForm.planet;
    this.heroes.weakness = this.formCenter.value.heroesForm.weakness;
  }

  constructor() { }

  ngOnInit(): void {
    this.formCenter.statusChanges?.subscribe((stato) => {
      console.log("form status changed", stato);
    });
  }

}
