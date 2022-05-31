import {rerenderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Arthur Shelby', message: 'Hello, when starts season?', image: 'avatars/user2.jpg'},
            {id: 2, name: 'Michael Shelby', message: 'Yo, I want some smoke?', image: 'avatars/user1.jpg'},
            {id: 3, name: 'Curly', message: 'Hello, Mr. Shelby!', image: 'avatars/user4.jpg'},
            {id: 4, name: 'Natalya Averyanova', message: 'Когда IOS?', image: 'logo192.png'},
            {id: 5, name: 'Tommy Spitz', message: '*ARGH*', image: 'logo192.png'},
            {id: 6, name: 'Yaroslav Anufriev', message: 'AMAZING!', image: 'logo192.png'},
        ],
        messages: [
            {id: 1, name: 'You', message: 'Hello, when starts season?', image: 'avatars/userDefault.jpg'},
            {id: 2, name: 'Arthur Shelby', message: 'Hello, IDK', image: 'avatars/user2.jpg'},
            {id: 3, name: 'You', message: 'Oh, ok', image: 'avatars/userDefault.jpg'},
            {id: 4, name: 'Arthur Shelby', message: 'UGHM', image: 'avatars/user2.jpg'},
            {id: 5, name: 'You', message: '*ARGH*', image: 'avatars/userDefault.jpg'},
            {id: 6, name: 'Arthur Shelby', message: 'Love You!', image: 'avatars/user2.jpg'},
        ],
    },
    profilePage: {
        posts: [
            {
                id: 1,
                name: 'Thomas Shelby',
                likes: 123001,
                message: 'New season! Wait soon...',
                image: 'avatars/userDefault.jpg',
                date: '27 may 2022'
            },
            {
                id: 2,
                name: 'Thomas Shelby',
                likes: 523,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
            {
                id: 3,
                name: 'Thomas Shelby',
                likes: 2514223,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
            {
                id: 4,
                name: 'Thomas Shelby',
                likes: 6523,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
            {
                id: 5,
                name: 'Thomas Shelby',
                likes: 12523,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
            {
                id: 6,
                name: 'Thomas Shelby',
                likes: 523,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
            {
                id: 7,
                name: 'Thomas Shelby',
                likes: 542123,
                message: 'End of the season... I will miss you!',
                image: 'avatars/userDefault.jpg',
                date: '28 may 2022'
            },
        ],
        newPostText: 'it-kamasutra.com',
    },
    sidebar: [
        {id: 1, path: '/profile', name: 'Profile'},
        {id: 2, path: '/friends', name: 'Friends'},
        {id: 3, path: '/dialogs', name: 'Dialogs'},
        {id: 4, path: '/news', name: 'News'},
        {id: 5, path: '/music', name: 'Music'},
        {id: 6, path: '/settings', name: 'Settings'},
    ]
}

let currentDate = new Date();

let getDate = () => `${currentDate.getDate()} ${currentDate.toLocaleString('default', {month: 'long'}).toLowerCase()} ${currentDate.getFullYear()}`;

export let addPost = (postMessage) => {
    let newPost = {
        id: 8,
        message: state.profilePage.newPostText,
        name: 'Thomas Shelby',
        likes: 0,
        image: 'avatars/userDefault.jpg',
        date: getDate(),
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;