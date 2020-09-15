<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card mt-3">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="border-top-0" scope="row">Name</th>
                                <th class="border-top-0" scope="row"></th>
                                <th class="border-top-0" scope="row">Username</th>
                                <th class="border-top-0" scope="row">Email</th>
                                <th class="border-top-0" scope="row">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in dataInfo" :key="data.id">
                                <td>{{ data.name }}</td>
                                <td>
                                    <router-link :to="'user/' + data.id">
                                        Profile <i class="fas fa-fw fa-angle-right"></i>
                                    </router-link>
                                </td>
                                <td>{{ data.username }}</td>
                                <td>{{ data.email }}</td>
                                <td>{{ data.address.city }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
