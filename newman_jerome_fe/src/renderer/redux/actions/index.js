let nextTodoId = 0
export const addContact = text => ({
    type: 'ADD_CONTACT',
    id: nextTodoId++,
    text
})

export const searchContact = filter => ({
    type: 'SEARCH_CONTACT',
    filter
})
