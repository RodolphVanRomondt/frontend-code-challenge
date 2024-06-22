import axios from "axios";

const url = "http://localhost:3001/users";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class User {

    static async getUsers() {
        try {
            const {data} = await axios.get(url);
            return data;
        } catch (e) {
            return [];
        }
    }

    static async getUser(id) {
        try {
            const result = await axios.get(`${url}/${id}`);
            return result.data;
        } catch (e) {
            return false;
        }
    }

    static async postUser(obj) {
        try {
            await axios.post(url, obj);
        } catch (e) {
            return false;
        }
    }

    static async putUser(obj) {
        try {
            const result = await axios.put(`${url}/${obj.id}`, obj);
            return result.data;
        } catch (e) {
            return false;
        }
    }

    static async deleteUser(id) {
    await axios.delete(`${url}/${id}`);
    }
}


export default User;