import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
type ByVals = 1 | 3 | 5;
// a service that can hold the 'by' value and live longer than the component, so that I can share that data
type CounterState = {
  by: ByVals;
};
export const counterStore = signalStore(
  withState<CounterState>({
    by: 1,
  }),
  withMethods((store) => {
    return {
      setBy: (by: ByVals) => patchState(store, { by: by }),
    };
  }),
  withHooks({
    onInit() {
      console.log('Created a conter store');
    },
    onDestroy() {
      console.log('Destoyed a store');
    },
  }),
);
