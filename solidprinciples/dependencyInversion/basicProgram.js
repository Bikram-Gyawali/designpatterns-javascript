class Store {
    constructor(user) {
      this.paypal=new Paypal();
      this.user=user
      // this.stripe = new Stripe(user);
    }
    purchaseBike(quantity) {
      this.paypal.makePayment(this.user,100*quantity)
      // this.stripe.makePayment(200 * quantity * 100);
    }
    purchaseHelmet(quantity) {
      this.paypal.makePayment(this.user,10*quantity)
      // this.stripe.makePayment(15 * quantity * 100);
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
  
  const store = new Store("John");
  store.purchaseBike(4);
  store.purchaseHelmet(4);
  