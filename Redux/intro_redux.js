// CONTADOR

// reducers

function contador(state = 0 , action){

  switch(action.type) {
    case 'INCREMENTO'
    return state + 1;

    case 'DECREMENTO'
    return state - 1;

    case 'ZERAR'
    return 0;
  }
}

// STORE

let store = Redux.createStore(contador);

// Recuperando estado
// Recuperando estado atual
document.write(store.getState());

// utilizando a função reducer (pura) para atualizar o valor do estado

store.dispatch({type: 'INCREMENTO'});

// imprimindo o valor atualizado do estado
document.write(store.getState());
