// Estamos migrando cada uno de los estados que teniamos anteriormente: searchResults, isLoading y error al reducer.

// No debemos exportar multiples reducers por archivo, por lo que debemos crear un archivo por cada reducer.

// Estados de react convertidos en un objeto para almacenar los estados de redux
const initialState = {
  isLoading: false,
  data: [],
  error: {}
}

// Por defecto, definimos como argumento el estado inicial.
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
// En Redux, los reducers son funciones puras que reciben el estado actual y una acción, y devuelven un nuevo estado. En redux: type son como los ids, pero para no llarmarlo asi, se llama type.
// Siempre hay que regresar un estado, por lo que si no hay un type que coincida, se regresa el estado actual. Ya que en caso contrario regresaria undefined y eso haria que crasheara la app.

export default resultsReducer
