const userReducer = (state = {
    name: "Ilya",
    age: 40
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload

            }
            break;
    }
    return state;
};

export default userReducer;