import { createSlice } from '@reduxjs/toolkit';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import england from '../../assets/images/flags/england.png';
import flag from '../../assets/images/flags/spain.png';

const initialState = {
    favoriteCards: [{
        id: 0,
        flag: spain,
        name: '라리가',
        isActive: true,
        withPlus: true,
        firstScore: 1,
        secondScore: 0,
        firstTeam: 'FC바르셀로나',
        secondTeam: '레알마드리드',
        isFavorite: true,
    },
    {
        id:1,
        flag: england,
        name: '프리미어리그',
        isActive: false,
        withPlus: true,
        firstScore: 1,
        secondScore: 0,
        firstTeam: 'FC바르셀로나',
        secondTeam: '레알마드리드',
        isFavorite: true,
    },
    {
        id:2,
        flag: germany,
        name: '분데스리가',
        isActive: false,
        withPlus: true,
        firstScore: 1,
        secondScore: 0,
        firstTeam: '바이헤른뮌헨',
        secondTeam: '프랑크푸르트',
        isFavorite: true,
    }],
    nonLiveCard: [{
        id: 0,
        flag: spain,
        name: '라리가',
        isActive: true,
        withPlus: true,
        firstTeam: 'FC바르셀로나',
        secondTeam: '레알마드리드',
        isFavorite: true,
    },{
        id: 1,
        flag: germany,
        name: '',
        isActive: false,
        withPlus: false,
        firstTeam: '맨체스터유나이티드',
        secondTeam: '리버풀',
        isFavorite: true,
    }],
    mainHeaderLive: [{
        id: 0,
        flag: flag,
        name: '라리가',
        isActive: true,
        firstScore: '1',
        secondScore: '0',
        firstTeam: 'FC바르셀로나',
        secondTeam: '레알마드리드',
        withPlus: true,
    },{
        id: 1,
        flag:'',
        name:'',
        isActive: false,
        firstScore: 2,
        secondScore: 0,
        firstTeam:'맨체스터유나이티드',
        secondTeam:'리버풀',
        withPlus: false,
    },{
        id: 2,
        flag:flag,
        name:'분데스리가',
        isActive: false,
        firstScore:'2',
        secondScore:'0',
        firstTeam:'바이헤른뮌헨',
        secondTeam:'프랑크푸르트',
        withPlus: true,
    }],
    mainHeaderNonLive: [{
        id: 0,
        flag: flag,
        name: '라리가',
        firstTeam: 'FC바르셀로나',
        secondTeam: '레알마드리드',
    },{
        id: 1,
        flag: '',
        name: '',
        firstTeam: '맨체스터유나이티드',
        secondTeam: '리버풀',
    }],
    buttonsValue: [{
        content: '5,000',
    },{
        content: '10,000',
    },{
        content: '50,000',
    },{
        content: '100,000',
    },{
        content: '1,000,000',
    }]
};

export const userSlice = createSlice({
    name: 'cards',
    initialState,
//   reducers: {
//     sign: (state, action) => {
//       state.userData = action.payload;
//       state.isUserAuthorized = true;
//     },
//     logout: (state) => {
//       state.userData = {};
//       state.loading = false;
//       state.isUserAuthorized = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUserData.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(getUserData.fulfilled, (state, action) => {
//       state.loading = false;
//       state.isUserAuthorized = true;
//       state.userData = action.payload;
//     });
//     builder.addCase(getUserData.rejected, (state) => {
//       state.loading = false;
//       state.isUserAuthorized = false;
//     });
//   },

});
// export const { sign, logout } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user.value;