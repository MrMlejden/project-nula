<template>
    <div class="container">
        <AddTodo></AddTodo>
        <FilterTodos></FilterTodos>
        <h3 class="py-3">TODO's</h3>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" :key="todo.id">
                <div class="image-todos"></div>
                <div class="content">{{ todo.title }}</div>
                <div class="footer-todo">
                    <i class="fas fa-trash-alt float-right" @click="deleteTodo(todo.id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddTodo from '@/components/AddTodo';
import FilterTodos from '@/components/FilterTodos';

export default {
    name: 'Todos',
    components: {
        AddTodo,
        FilterTodos
    },
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo'])
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
};
</script>

<style lang="scss" scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;

    .todo {
        background: #41b883;
        border-radius: 5px;
        height: 300px;
        color: #f7f9fb;
        position: relative;

        .image-todos {
            height: 100px;
            background-color: #dcdaea;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .content {
            text-align: center;
            padding: 10px;
            width: 100%;
        }

        .footer-todo {
            position: absolute;
            width: 100%;
            bottom: 5px;
            padding-right: 10px;
            padding-bottom: 5px;
            right: 0;

            i {
                cursor: pointer;
            }
        }
    }
}
</style>
