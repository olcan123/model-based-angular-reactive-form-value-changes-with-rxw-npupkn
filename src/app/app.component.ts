import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Sheet } from "./sheet.model";
import { Consultant } from "./consultant.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  sheetFormGroup: FormGroup;
  sheetData: Sheet;
  constructor(private formBuilder: RxFormBuilder) {}

  ngOnInit() {
    this.sheetData = new Sheet();
    this.sheetData.rows = new Array<Consultant>();
    this.sheetData.rows.push(new Consultant());
    this.sheetFormGroup = this.formBuilder.formGroup(this.sheetData);
  }

  addRow() {
    let rows = <FormArray>this.sheetFormGroup.controls.rows;
    let consultant = new Consultant();
    this.sheetData.rows.push(consultant);
    rows.push(this.formBuilder.formGroup(consultant));
  }
}
