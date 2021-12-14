const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
const api = 'http://localhost:3000/v1/message';

const initialState = {
  messages: [],
};

const reduceMessages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export const getMessages = () => (dispatch) => {
  fetch(api)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: MESSAGES_SUCCESS,
      payload: resResponse,
    }));
};

export default reduceMessages;
