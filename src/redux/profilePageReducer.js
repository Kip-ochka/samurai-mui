const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const initialState = {
    posts: [
        {id: 1, message: 'message1', likeCount: 1},
        {id: 2, message: 'message2', likeCount: 1},
        {id: 3, message: 'message3', likeCount: 1},
        {id: 4, message: 'message4', likeCount: 12},
        {id: 5, message: 'message5', likeCount: 123},
        {id: 6, message: 'message6', likeCount: 1234},
        {id: 7, message: 'message7', likeCount: 12345},
        {id: 8, message: 'message8', likeCount: 123456},
    ], newPostText: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 99,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text})

export default profileReducer