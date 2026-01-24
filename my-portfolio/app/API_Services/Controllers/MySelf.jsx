import Api from '../Api'


export const getMySelf = (id) => {
    return Api.get(`/self/${id}`)
}

export const updateMySelf = (id, data) => {
    return Api.put(`/self/${id}`, data)
}
