import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index';
import { SubscriptionProps } from '../../models';
interface InitProps{
    lang:string,
    subscription:SubscriptionProps|null
}
const initialState:InitProps={
    lang:'',
    subscription:null
}
export const CommonSlice=createSlice({
    name:'common',
    initialState,
    reducers:{
        setLang(state, action){
            state.lang=action.payload
        },
        setSubscription(state,action){
            state.subscription=action.payload
        }}
})
export const {setLang,setSubscription} = CommonSlice.actions

export const selectCommon = (state: RootState) => state.common
export default CommonSlice.reducer