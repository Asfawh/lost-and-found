import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8004/api/items'
})

const ITEM_SERVICE = {
 "createItem": async itemData => {
    try {
        const res = await http.post('/', itemData)
        return res.data
    } catch(err) { throw err }
},

  "getItemById": async id => {
    try {
        const res = await http.get(`/${id}`)
        return res.data
    } catch(err) { throw err }
},

  "getAllItem": async () => {
    try {
        const res = await http.get('/')
        return res.data
    } catch(err) { throw err }
},

  "getItemByLocation": async () => {
    try {
        const res = await http.get('/location')
        return res.data
    } catch(err) { throw err }
},

  "updateItemById": async (id, itemData) => {
    try {
        const res = await http.put(`/${itemData._id}`, itemData)
        return res.data
    } catch(err) { throw err }
},

 "deleteItemById": async id => {
    try {
        const res = await http.delete(`/${id}`)
        return res.data
    } catch(err) { throw err }
}
}

export default ITEM_SERVICE