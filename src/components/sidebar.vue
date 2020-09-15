<template>
    <div class="container">
        <div class="sidenav">
            <div class="home container text-center">
                <router-link class="d-flex container justify-content-center" to="/"
                    ><img alt="Vue logo" src="../assets/logo.png" height="50" width="50"
                /></router-link>
            </div>

            <div class="side-menu">
                <hr />
            </div>
            <div class="accordion px-4">
                <div>
                    <div class="d-flex user-badge">
                        <a
                            href="#"
                            class="d-flex c-pointer"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            <div class="user-photo p-1 mt-1 ml-1 mb-1 ml-0">
                                <img alt="Vue logo" src="../assets/manager.png" height="25" width="25" />
                            </div>
                            <div class="user-info pl-2 pt-2">{{ fullName }}</div>
                            <div class="arrow-expander fas fa-angle-right"></div>
                        </a>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="container pt-2">
                            <div class="d-flex pl-4">
                                <i class="fas fa-angle-right p-1"></i>
                                <router-link class="d-flex" to="/about">Settings</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="side-menu">
                <hr />
            </div>

            <div class="accordion px-4">
                <div>
                    <a href="#" class="user-badge d-flex align-items-baseline c-pointer">
                        <div class="user-photo p-1 mt-1 ml-1 mb-1 ml-0">
                            <i class="fa-fw text-dark fas fa-table pt-1"></i>
                        </div>
                        <span
                            class="d-flex pl-2 pt-2"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            >Dashboard</span
                        >
                    </a>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="container d-flex">
                            <router-link class="d-flex py-2 ml-4" to="/data">
                                <i class="fas fa-angle-right p-1"></i>Data Tables
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Sidebar',
    props: {
        msg: String
    },
    computed: {
        ...mapState({
            profile: state => state.profile
        }),

        fullName() {
            return `${this.profile.firstName} ${this.profile.lastName}`;
        }
    }
};
</script>
