let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'message1', likeCount: 1},
            {id: 2, message: 'message2', likeCount: 1},
            {id: 3, message: 'message3', likeCount: 1},
            {id: 4, message: 'message4', likeCount: 12},
            {id: 5, message: 'message5', likeCount: 123},
            {id: 6, message: 'message6', likeCount: 1234},
            {id: 7, message: 'message7', likeCount: 12345},
            {id: 8, message: 'message8', likeCount: 123456},
        ]
    },
    messagePage: {
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
        ]
    },
    sidebar: {
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
    },
}

export const addPost = (postMessage) => {
    const newPost = {
        id:99,
        message:postMessage,
        likeCount:0
    }
    state.profilePage.posts.push(newPost)
}
    export default state