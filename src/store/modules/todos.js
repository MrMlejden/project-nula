import ApiCalls from '@/service/ApiCalls';
import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await ApiCalls.getTodos();

        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    async filterTodos({ commit }, event) {
        // Get selected number
        const selectedNumber = parseInt(event.target.options[event.target.options.selectedIndex].innerText);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${selectedNumber}`);

        commit('setTodos', response.data);
        // console.log(selectedNumber);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default {
    state,
    getters,
    actions,
    mutations
};