// Example using jsfiddle.net

// contador


//reducers

function contador( state = 0, action) {
	switch ( action.type ) {
  	case 'incremento':
    	return state + 1;
    case 'decremento':
      return state - 1;
    case 'zerar-contador':
    	return 0;
      
  }

	return state;

}

//criar store
let store = Redux.createStore(contador);

// recuperar estado

document.write(store.getState()  + '<br />');

store.dispatch({ type: 'incremento' });

store.dispatch({ type: 'incremento' });
store.dispatch({ type: 'incremento' });

document.write(store.getState() + '<br />');
// enviando uma modificação...
store.dispatch({ type: 'decremento' });

document.write(store.getState() + '<br />');

store.dispatch({ type: 'zerar-contador' });

document.write(store.getState() + '<br />');