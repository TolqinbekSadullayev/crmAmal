const initalState = []

function useReducerCard(state = initalState, action){
    if (action.type === 'add') {
        let New_mass = [...state]
        New_mass.push(action.payload)
        return state = New_mass
    }
    return state
}

export {useReducerCard}