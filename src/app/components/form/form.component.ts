import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FixerService } from '../../services/fixer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  amount : Number;
  rate : Number;
  output : Number;

  currencyForm : FormGroup;
	submitted = false;

  constructor(private fixerService : FixerService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.currencyForm = this.formBuilder.group({
      amount: [Validators.required]
    });

    this.getListCurrencies();
    setInterval(() =>{ this.getListCurrencies() }, 600000)
  }
  get form() {
    return this.currencyForm.controls;
  }

  getListCurrencies(){
    this.fixerService.listByCurrencies()
      .subscribe((res)=>{
        this.rate = (<any>res).rates['USD'];
      })
      if(this.output != undefined){
        this.calculate()
      }
  }

  calculate(){
    this.output = +this.amount * +this.rate;
    this.output = +this.output.toFixed(2);
  }

}
