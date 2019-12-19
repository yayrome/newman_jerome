const contactReducer = (state = 'SEARCH', action) => {
  switch (action.type) {
    case 'SEARCH': // search page for a contact
      return {
        id: action.id,
        error_text: action.text,
        authenticated: true,
        contacts: [...state.contacts, ...action.contacts]
      };
    case 'INDEX': // Single contact
      return {
        id: action.id,
        error_text: action.text,
        authenticated: false,
        chosenContact: action.chosenContact
      };
    case 'CREATE': // create contact
      return {
        id: action.id,
        error_text: action.text,
        authenticated: false,
      };
    default: // lets assume the user is not logged in. May want to run logout api call just in case.
      return state;
  }
};

export default contactReducer;
