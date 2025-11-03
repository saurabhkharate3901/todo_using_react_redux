import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO } from "../action/Index";

const initaiState = [
    { id: 1, todo: 'Buy Laptop' },
    { id: 2, todo: 'Master Redux' },
    { id: 3, todo: 'Watering Plants' },
]

export const operationReducers = (state = initaiState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_ALL:
            return [];

        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;

        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                }
                updatedArray.push(item);
            })
            return updatedArray;
            
        default: return state;
    }
}