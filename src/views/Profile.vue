<template>
    <div class="main-wrapper">
        <router-link to="/data">Back</router-link>

        <div class="profile-wrapper">
            <div class="profile-info p-1">
                <h4 class="info-header">Professional Details</h4>
                <div class="profile-picture"><img src="" alt="image" /></div>
                <div class="profile-info-details d-block text-left">
                    <h6 class="mt-3">Name: {{ profile.name }}</h6>
                    <h6>Email: {{ profile.email }}</h6>
                    <h6>Phone: {{ profile.phone }}</h6>
                    <h6>Company Name: {{ profile.username }}</h6>
                </div>
            </div>

            <div class="profile-details">
                <div class="profile-details-header mb-2">List of Albums:</div>

                <div class="list-group mb-2 ml-2 mr-2" v-for="post in posts" :key="post.id">
                    <a class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-2 font-weight-bold text-capitalize">{{ post.title }}</h5>
                            <small>{{ post.title.length }} days ago</small>
                        </div>
                        <p class="mb-1 text-sm-left">{{ post.body }}</p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
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

.info-header {
    display: flex;
    justify-content: center;
}

.profile-picture {
    background-color: yellowgreen;
    min-height: 300px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-wrapper {
    padding: 20px;
    display: flex;
}

.profile-details {
    border-radius: 10px;
    margin-left: 20px;
    width: 100%;
    background-color: #fff;
}
</style>
