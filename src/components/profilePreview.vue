<template>
    <div class="container col-lg-5">
        <div class="card">
            <div>
                <img class="image" src="../assets/background1.png" alt="...">
            </div>
            <div class="content">
                <img class="author" src="../assets/johnsmith.png" alt="...">
                <div class="title p-0">
                    <h4>John Smith</h4>
                </div>
                <h5 class="text-center"><small>{{ profile.username }}</small></h5>
                <p class="description text-center">"I like the way you work it <br>No diggity <br>I wanna bag it up"</p>
            </div>
            <hr>
            <div class="text-center">
                <div class="row">
                    <div class="col-md-3 col-md-offset-1">
                        <h5>12<br><small>City</small></h5>
                    </div>
                    <div class="col-md-4">
                        <h5>2GB<br><small>Country</small></h5>
                    </div>
                    <div class="col-md-3">
                        <h5>24,6$<br><small>Postal Code</small></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'profilePreview',
    computed: {
        ...mapState({
            profile: state => state.profile,
        })
    },
    methods: {

    }
}
</script>

<style>
    .card {
        background-color: #f5f7f8;
        /*padding: 10px;*/
    }

    .image {
        width: 100%;
        height: 150px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .author {
        width: 100px;
        height: 100px;
        border-radius: 200px;
        top: -60px;
        border: 3px solid white;
        position: relative;
        margin: 0px auto;
        display: flex;
    }

    .title {
        display: flex;
        padding-top: 40px;
        justify-content: center;
    }

    .content {
        padding: 10px;
    }
</style>