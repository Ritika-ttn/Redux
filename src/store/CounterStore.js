import {observable, action, computed, makeObservable} from 'mobx';

class CounterStore {
  constructor() {
    makeObservable(this);
  }
  @observable count = 0;
  @action
  increment() {
    this.count++;
  }
  @action
  decrement() {
    this.count--;
  }

  @computed getUpdatedCount() {
    return `Current Count: ${this.count}`;
  }
}
export default new CounterStore();
