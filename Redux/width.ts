import { ADD_WIDTH } from '../Constants/type'

interface Action {
  type: string,
  Width: number,
}

const initState = {
  Width: 0,
}

const Width  = ( state = initState , action: Action ) => {
  switch (action.type) {
    case ADD_WIDTH : {
      return {
        Width: action.Width
      }
    }
    default:
      return state
  }
}

export default Width