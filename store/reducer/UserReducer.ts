import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    name: String;
    mail: String;
    mdp: String
}

//Etat initial
const initialState = {
    users : [] as User[] //Tab utilisateurs
};

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        //ajout un utilisateur
        addUser: (state , action: PayloadAction<User>) => {
            state.users.push(action.payload);
        }
    }
});

//export les actions genere auto
export const {} = userSlice.actions;

//export le reducer genere par createSlice
export default userSlice.reducer;