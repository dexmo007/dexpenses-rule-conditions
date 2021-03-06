import Condition from './Condition';
import { Receipt } from '@dexpenses/core';

export default class CurrencyCondition implements Condition {
  constructor(private currency: string) {}

  test(receipt: Receipt): boolean {
    return !!receipt.amount && receipt.amount.currency === this.currency;
  }
}
