<template>
    <div class="container">
        <AddTodo></AddTodo>
        <FilterTodos></FilterTodos>

        <h3 class="py-3">TODO's</h3>
        <div class="legend pb-3">
            <span class="pr-3">Double click to mark as complete:</span>
            <span class="float-right pr-4">
                <span class="incomplete-box pr-3">
                    <i class="fas fa-square"></i>
                    Incomplete
                </span>
                <span class="complete-box">
                    <i class="fas fa-square"></i>
                    Complete
                </span>
            </span>
        </div>
        <div class="todos">
            <div
                class="todo"
                @dblclick="onDblClick(todo)"
                :class="{ 'is-complete': !todo.completed }"
                v-for="todo in allTodos"
                :key="todo.id"
            >
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
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            };

            this.updateTodo(updTodo);
        }
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

    .is-complete {
        background-color: #35495e;
        color: #fff;
    }
}

.incomplete-box {
    i {
        color: #35495e;
    }
}

.complete-box {
    i {
        color: #41b883;
    }
}
</style>
