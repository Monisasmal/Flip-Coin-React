import { Children, createContext, useReducer } from "react";

const initialState = {
  currentCoin: null,
  nFlips : 0,
  nHeads: 0,
  darkMode : false
}

function coinReducer(state,action){
  switch(action.type){
    case "FLIP":
      const isHead = action.payload.side === "heads";
      return{
        ...state,
        currentCoin: action.payload,
        nFlips : state.nFlips+1,
        nHeads : state.nHeads + ( isHead ? 1 : 0)
      }
      case "RESET":
        return{
          ...state,
          currentCoin:null,
          nFlips:0,
          nHeads:0
        };
        case "TOGGLE_DARK":
          return{
            ...state,
            darkMode: !state.darkMode
          };
          default: 
          return state;
  }
}

// for context
export const CoinContext = createContext();

export function CoinProvider({children}){
const [state,dispatch] = useReducer(coinReducer, initialState);
return(
  <CoinContext.Provider value ={{state, dispatch}}>
    {children}
  </CoinContext.Provider>
)
}