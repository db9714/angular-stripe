import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit
} from "@angular/core"; import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
declare var Stripe: any;

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})

export class RegComponent implements OnInit, AfterViewInit {
  email: string;
  firstname: string;
  lastname: string;
  cardNumber: string;
  cvc: string;
  stripe: any;
  cardNumberElement: any;
  cardCvcElement: any;
  cardExpiryElement: any;
  TokenValue: string

  message: string;
  constructor(
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngAfterViewInit() { }


  ngOnInit() {
    this.stripe = Stripe(environment.stripePublicKey);
    var elements = this.stripe.elements();

    this.cardNumberElement = elements.create("cardNumber");
    this.cardNumberElement.mount("#card-number-element");
    this.cardNumberElement.on("change", event => {
      const displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    this.cardExpiryElement = elements.create("cardExpiry");
    this.cardExpiryElement.mount("#card-expiry-element");
    this.cardExpiryElement.on("change", event => {
      const displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });

    this.cardCvcElement = elements.create("cardCvc");
    this.cardCvcElement.mount("#card-cvc-element");
    this.cardCvcElement.on("change", event => {
      const displayError = document.getElementById("card-errors");
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = "";
      }
    });
    this.TokenValue = "sss"
  }


  createUser() {
    this.stripe.createToken(this.cardNumberElement).then(result => {
      alert("Token Created Successfully.")
      console.log("token", result.token.id);
      document.getElementById("token").style.display = "block"
      this.TokenValue = "sss"
    });

  }
  resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = ""
    document.getElementById("emailadd").value = ""
    document.getElementById("name").value = ""
    this.cardNumberElement.destroy()
    this.cardExpiryElement.destroy()
    this.cardCvcElement.destroy()
  }
}


