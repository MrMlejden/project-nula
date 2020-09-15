<template>
    <div class="main-wrapper">
        <div class="card">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th scope="row">Name</th>
                        <th scope="row"></th>
                        <th scope="row">Username</th>
                        <th scope="row">Email</th>
                        <th scope="row">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in dataInfo" :key="data.id">
                        <td>{{ data.name }}</td>
                        <td><router-link :to="'user/' + data.id">Profile</router-link></td>
                        <td>{{ data.username }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.address.city }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ApiCalls from '@/service/ApiCalls';
import store from '../store/index';

export default {
    name: 'DataVisual',
    store,
    data() {
        return {
            dataInfo: null,
            isOpen: true
        };
    },
    created() {
        ApiCalls.getUsers()
            .then(response => {
                this.dataInfo = response.data;
            })
            .catch(error => {
                console.log('There was an error:', error.response);
            });
    }
};
</script>

<style>
.card {
    text-align: left;
    margin: 20px;
    border: solid 1px lightgray;
    border-radius: 10px;
}

.table {
    margin-bottom: 0 !important;
}
</style>
