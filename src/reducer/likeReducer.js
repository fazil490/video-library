export const likeReducer = (state, action) => {
    const {like} = state;
    const {type, payload} = action;

    switch(type) {
        case "Add-to-like" : 
            if (like.filter((item) => item._id === payload._id).length === 1) 
                return {
                    ...state,
                    like: [...like.filter((item) => item._id !== payload._id)]
                };

            return {
                ...state,
                like: [...like, payload]
            };

        case "Remove-from-like" : 
            return {
                ...state,
                like: [...like.filter((item) => item._id !== payload._id)]
            };

        case "Clear" :
            return payload;

        case "default" : 
            return state;
    }
}