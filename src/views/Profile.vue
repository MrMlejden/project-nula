<template>
    <div class="container-fluid mt-3">
        <div class="form-row">
            <div class="col-12 text-left mb-3">
                <router-link to="/data"><i class="fas fa-angle-left"></i> Back</router-link>
            </div>
            <div class="col-3">
                <h5 class="info-header">Professional Details</h5>
                <div class="profile-info">
                    <div class="profile-picture rounded-top"><img src="" alt="image" /></div>
                    <div class="profile-info-details d-block text-left p-3">
                        <h6><span class="font-weight-bold">Name:</span> {{ profile.name }}</h6>
                        <h6><span class="font-weight-bold">Email:</span> {{ profile.email }}</h6>
                        <h6><span class="font-weight-bold">Phone:</span> {{ profile.phone }}</h6>
                        <h6 class="mb-0"><span class="font-weight-bold">Company Name:</span> {{ profile.username }}</h6>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div class="profile-details">
                    <div class="h5 mb-2">List of Albums:</div>
                    <div class="list-group mb-2" v-for="post in posts" :key="post.id">
                        <a class="list-group-item list-group-item-action flex-column align-items-start py-3">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-2 font-weight-bold text-capitalize">{{ post.title }}</h6>
                                <small>{{ post.title.length }} days ago</small>
                            </div>
                            <p class="text-sm-left">{{ post.body }}</p>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Profile',
    props: {
        id: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            profile: {},
            posts: []
        };
    },
    watch: {
        id: {
            immediate: true,
            async handler() {
                await this.getUser();
                await this.getUserPosts();
            }
        }
    },
    methods: {
        async getUser() {
            return axios
                .get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
                .then(response => {
                    this.profile = response.data;
                })
                .catch(error => {
                    console.log('There was an error:', error.response);
                });
        },
        async getUserPosts() {
            return axios
                .get('https://jsonplaceholder.typicode.com/posts/')
                .then(response => {
                    this.posts = response.data.filter(post => {
                        return post.userId === this.profile.id;
                    });
                })
                .catch(error => {
                    console.log('There was an error:', error.response);
                });
        }
    }
};
</script>

<style>
.profile-info {
    background-color: #fff;
    border-radius: 10px;
}

.profile-picture {
    background-color: yellowgreen;
    min-height: 300px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-details {
    border-radius: 10px;
    width: 100%;
}
</style>
