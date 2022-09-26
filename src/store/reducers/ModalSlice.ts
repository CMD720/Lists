import {TModal} from "../../types/type";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TModal = {
    modalWindow: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalOnOffAuto(state) {
            state.modalWindow ? state.modalWindow = false : state.modalWindow = true
        }
    }
})
export default modalSlice.reducer
export const {modalOnOffAuto} = modalSlice.actions