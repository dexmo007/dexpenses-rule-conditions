import Condition from '../Condition';
import { Receipt } from '@dexpenses/core';

export default class OrCondition implements Condition {
  constructor(private conditions: Condition[]) {}

  test(receipt: Receipt): boolean {
    return this.conditions.some((c) => c.test(receipt));
  }
}
