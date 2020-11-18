import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      user: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  saveForm(): void {
    if (this.form.valid) {
      alert("Válido");
    } else {
      alert("Inválido");
    }
  }

  clear(): void {
    this.form.reset();
  }
}
