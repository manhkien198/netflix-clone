import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index';

interface InitProps{
    lang:string
}
const initialState:InitProps={
    lang:localStorage.getItem('i18nextLng')||'en-US'
}
export const CommonSlice=createSlice({
    name:'common',
    initialState,
    reducers:{
        setLang(state, action){
            state.lang=action.payload
        }}
})
export const {setLang} = CommonSlice.actions

export const selectCommon = (state: RootState) => state.common
export default CommonSlice.reducer