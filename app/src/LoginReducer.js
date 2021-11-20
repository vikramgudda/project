let initialState={
user:null
}
function LoginReducer(state=initialState, action){
    if(action.type === "loginSuccess"){

        return {
            ...state,
            loginSuccess: true,
            user:state.user
           
        };
    }
    if(action.type === "loginFail"){
        return {
            ...state,
            loginSuccess: false,
        };
    }
}    

export default LoginReducer;