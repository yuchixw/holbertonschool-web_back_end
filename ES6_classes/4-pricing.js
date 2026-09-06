import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this.amount;
  }

  set amount(amountInstance) {
    this._amount = amountInstance;
  }

  get currency() {
    return this._currency;
  }

  set currency(currencyInstance) {
    if (currencyInstance instanceof Currency) this._currency = currencyInstance;
  }

  displayFullPrice() {
    const code = this.currency._code;
    const name = this.currency._name;
    return `${this.amount} ${name} (${code})`;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return (amount * conversionRate);
  }
}
