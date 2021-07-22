import {
    CLEARED_LIKED_JOBS,
    LIKE_JOB
} from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case LIKE_JOB:
            const exists = !!state.find(likedJob => {
                return action.payload.title === likedJob.title
            })
            return exists ? state : [...state, action.payload]
        case CLEARED_LIKED_JOBS:
            return []
        default:
            return state;
    }
}