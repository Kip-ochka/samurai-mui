const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Simon'},
        {id: 4, name: 'Emil'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Ekaterina'},
        {id: 7, name: 'Igor'},
        {id: 8, name: 'rus'},
        {id: 9, name: 'Ksenia'}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'ti beatifull'},
        {id: 4, message: 'you will acheve'},
    ],
    newDialogText: ''
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newDialogText = action.messageText
            return state
        case SEND_MESSAGE:
            const newMessage = state.newDialogText
            state.newDialogText = ''
            state.messages.push({id: 99, message: newMessage})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text})

export default dialogReducer