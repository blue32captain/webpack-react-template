import {
  ADD_TO_CART,
} from '../constants'

const initialState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state

      }
      return [ ...state, action.productId ];

    default:
      return state
  }
};

export default addedIds
