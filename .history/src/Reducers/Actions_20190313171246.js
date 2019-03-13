const initialState = {
    currentAction:null,
    actions:[
        {
            method:'get',
            endPont:'user_GetUserData',
            parameters: [
                {
                    name:'theUserId',
                    placeHolder:'The User Id',
                    value:'',
                    disabled:null
                },
                {
                    name:'apiKey',
                    placeHolder:'API Key',
                    value:'',
                    disabled:null
                },
            ]
        },
    ]
}

export default (state = initialState,action) => {
    switch(action.type) {
            case 'APPEND_USER_INFO_IN_ACTIONS':
                let userInfo = action.payload;
                let newState = state;
                newState.actions.forEach((action,key) => {
                    action.parameters.forEach((param,paramKey) => {
                        switch(param.name){
                            case'theUserId':
                                newState.actions[key].parameters[paramKey].value = userInfo.userId;
                            break;
                            case'apiKey':
                                newState.actions[key].parameters[paramKey].value = userInfo.apiKey;
                            break;
                            default:
                                return state;
                        }
                    })
                })
                return {
                    ...state,
                    newState    
                }
            case 'SET_CURRENT_ACTION':
                let currentAction = state.actions.find((action,key) => {
                    if(key === action.payload)
                        return action
                })
        default:
            return state;
    }
}