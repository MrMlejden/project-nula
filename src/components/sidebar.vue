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
            <div class="accordion">
                <div>
                    <div class="container d-flex user-badge">
                        <div
                            class="d-flex p-1"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            <div class="user-photo p-1 m-1">
                                <img alt="Vue logo" src="../assets/manager.png" height="25" width="25" />
                            </div>
                            <div class="user-info pl-2 pt-2">{{ fullName }}</div>
                            <div class="arrow-expander fas fa-angle-right"></div>
                        </div>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="container pl-5 pt-2">
                            <div class="d-flex">
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

            <div class="accordion">
                <div>
                    <div class="container d-flex align-items-baseline">
                        <i class="pl-1 fas fa-tachometer-alt"></i>
                        <span
                            class="d-flex p-1"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            >Dashboard</span
                        >
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="container d-flex">
                            <ul>
                                <li>
                                    <router-link class="d-flex" to="/data">Data Tables</router-link>
                                </li>
                            </ul>
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

<style lang="scss">
.user-photo {
    background-color: #42b983;
    border-radius: 20px;
}

.user-info {
    /*padding-top: 10px;*/
}

.user-badge {
    cursor: pointer;
}

.arrow-expander {
    position: absolute;
    right: 20px;
    padding-top: 11px;
}

.sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2d4446;
    padding-top: 10px;
}

.side-menu {
    padding-left: 20px;
    padding-right: 20px;
}

hr {
    border-top: 1px solid #8a909a;
}

.menu-headlines {
    font-weight: bold;
    text-align: left;
    color: rgba(19, 18, 18, 0.25);
}
</style>
