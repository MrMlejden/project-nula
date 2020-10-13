<template>
    <div>
        <h3 class="py-3">Add Todo</h3>

        <div class="add-todo">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo..." />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        };
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
            this.title = '';
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
}
input[type='text'] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: 0;
}
input[type='submit'] {
    flex: 2;
    background: #2d4446;
    color: #fff;
    border: 1px #2d4446 solid;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}
</style>
