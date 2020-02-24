import React from 'react'
import axios from 'axios'

export function dataGet(url) {
    return axios.get(`https://surveyglance.herokuapp.com/api/tache/facade`+url)
    .then(res=> res.data)
}

export function dataPost(url,data){
    return axios.post(`https://surveyglance.herokuapp.com/api/tache/facade`+url,data)
    .then(res=>res.data)
}