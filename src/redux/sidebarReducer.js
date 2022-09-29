const initialState = {
    totalFriendCount: 3,
    friends: [
        {
            name: 'Dima',
            id: 0,
            avatarLink: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg"
        },
        {
            name: 'Denis',
            id: 1,
            avatarLink: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg"
        },
        {
            name: 'Sahsha',
            id: 2,
            avatarLink: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg"
        },
        {
            name: 'Semion',
            id: 3,
            avatarLink: "https://klike.net/uploads/posts/2020-06/1591514925_2.jpg"
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer