import initialState from './state';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '[TODO-LIST] Add TODO':
            return [
                ...state, {
                    name: action.name,
                    done: false
                }
            ]

        case '[TODO-LIST] Toggle TODO': 
            return [...state]
                .map((obj, i) => {
                    if (action.index === i) {
                        return {
                            ...obj,
                            done: action.value
                        }
                    }
                    return obj;
                })

        default:
            return state;
    }
};

export default reducer;