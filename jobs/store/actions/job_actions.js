import axios from 'axios'
import {FETCH_JOBS} from "./types";
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'

const JOB_QUERY_PARAMS = {
    publisher: '12312313',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

const JOB_ROOT_URL = 'https://indeed.com?'
const buildJobsUrl = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip})
    return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        // const zip = await reverseGeocode(region)
        // console.log(zip)
        console.log('Hello')
        // const url = buildJobsUrl(zip)
        const data = await new Promise((resolve, reject) => {
            resolve([
                {
                    title: 'title 1'
                },
                {
                    title: 'title 2'
                },
                {
                    title: 'title 3'
                }
            ])
        })
        dispatch({ type: FETCH_JOBS, payload: data})
        callback()
    } catch (e) {
        console.log(e)
    }
}