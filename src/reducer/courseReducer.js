export default function( state={}, action){
    switch(action.type){
        case 'COURSE_LIST':
            return {...state,courseList:action.payload}
            default:
            return state
    }
}