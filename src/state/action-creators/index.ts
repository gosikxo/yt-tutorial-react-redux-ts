import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import {Action} from "../actions/index"
// funkcja w funkcji, bo w redux moze byc tylko jeden argument i redux oczekuje dispatch, on nie wiem co to amount, ale amount jest mi potrzebne; dispatch to funkcja, która publikuje akcję
export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withDrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}