import store from './store.js';
import {addToCart, deleteFromCart, updateCart} from './actions/cart-actions'


console.log("Initial state:",store.getState());


let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500mg',1,250));
store.dispatch(addToCart('Flour 1kg',2,110));
store.dispatch(addToCart("Juice 2L",1,250))

store.dispatch(updateCart('milk 500ml',5,47));

store.dispatch(deleteFromCart('Coffee 500mg'))

unsubscribe();
