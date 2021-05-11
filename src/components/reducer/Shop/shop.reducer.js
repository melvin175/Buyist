// import {FILTER, SORT} from './shop.types'


// export const INITIAL_STATE = {
//     sortStatus: false,
//     filterStatus: false,
//     sort: null,
//     filters: {
//         menClothing: false,
//         womenClothing: false,
//         jewellery: false,
//         electronics: false,
//     },
// }


// export function shopReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case SORT:
//             return{
//                 ...state,
//                 sort: action.payload.sort,
//                 sortStatus: false
//             }

//         case FILTER:
//             return{
//                 ...state,
//                 filters: action.payload.filters,
//                 filterStatus: false
//             }
//         default:
//             return{...state}
//     }
// }