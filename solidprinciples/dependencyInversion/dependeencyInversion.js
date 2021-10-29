class Store {
  constructor(paymenetProcessor) {
    this.paymenetProcessor = new paymenetProcessor();
  }
  purchaseBike(quantity) {
    this.paymenetProcessor.pay(100 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymenetProcessor.pay(10 * quantity);
  }
}

class StripePaymenetProcessor {
  constructor(user) {
    this.user = user;
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay() {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymenetProcessor("Bikram"));
store.purchaseBike(4);
store.purchaseHelmet(4);

const store1 = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(5);
