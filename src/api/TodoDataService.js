import axios from 'axios'

class TodoDataService {

    retrieveAllTodos(name) {
        let username = 'user'
        let password = 'password'
        let basicAuthHeader = 'Basic' + window.btoa(username + ':' + password)

        return axios.get(`http://localhost:8080/users/${name}/todos`, {
            header: {
                authorization : basicAuthHeader
            }
        })
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    createTodo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()