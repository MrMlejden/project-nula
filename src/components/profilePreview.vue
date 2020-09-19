<template>
    <div class="col-5">
        <div class="card card-about">
            <div>
                <img class="image" src="../assets/background1.png" alt="..." />
            </div>
            <div class="content">
                <img class="author" src="../assets/johnsmith.png" alt="..." />
                <div class="title p-0">
                    <h4>John Smith</h4>
                </div>
                <h5 class="text-center">
                    <small>{{ profile.username }}</small>
                </h5>
                <p class="description text-center">
                    "I like the way you work it <br />No diggity <br />I wanna bag it up"
                </p>
            </div>
            <hr />
            <div class="text-center">
                <div class="row">
                    <div class="col-md-3 col-md-offset-1">
                        <h5>{{ profile.city }}<br /><small>City</small></h5>
                    </div>
                    <div class="col-md-4">
                        <h5>{{ profile.country }}<br /><small>Country</small></h5>
                    </div>
                    <div class="col-md-3">
                        <h5>{{ profile.zipCode }}<br /><small>Postal Code</small></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ProfilePreview',
    computed: {
        ...mapState({
            profile: state => state.profile
        })
    },
    methods: {}
};
</script>
