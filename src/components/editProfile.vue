<template>
    <div class="col-7">
        <div class="card">
            <div class="card-header">
                Edit Profile
            </div>
            <div class="card-body">
                <form @submit.prevent="onSave">
                    <div class="form-row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label>Company</label>
                                <input type="text" class="form-control border-input" disabled="" placeholder="Company" value="Project Nula Inc.">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control border-input" placeholder="Username" value="mladen"  v-model="profile.username">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control border-input" placeholder="Email" v-model="profile.email">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="text" class="form-control border-input" placeholder="First Name" value="Mladen" v-model="profile.firstName">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="text" class="form-control border-input" placeholder="Last Name" value="Jako" v-model="profile.lastName">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" class="form-control border-input" placeholder="Home Address" value="Melbourne, Australia" v-model.trim="profile.address">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" class="form-control border-input" placeholder="City" value="Melbourne" v-model="profile.city">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Country</label>
                                <input type="text" class="form-control border-input" placeholder="Country" value="Australia" v-model="profile.country">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Postal Code</label>
                                <input type="number" class="form-control border-input" placeholder="ZIP Code" v-model.number="profile.zipCode">
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>About Me</label>
                                <textarea rows="5" class="form-control border-input" placeholder="Here can be your description" value="Mike">
                                    Oh so, your weak rhyme
                                    You doubt I'll bother, reading into it
                                    I'll probably won't, left to my own devices
                                    But that's the difference in our opinions.
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-secondary rounded">Update Profile</button>
                    </div>
                </form>

                <div class="container-fluid">
                    <div v-if="errors.length">
                        <hr>
                        <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'editProfile',
    data() {
        return {
            profile: {},
            errors: [],
        }
    },
    methods: {
        ...mapActions({
            saveProfile: 'saveProfile'
        }),

        onSave() {
            if (this.validate()) {
                this.saveProfile(this.profile);

                this.profile = {};
            }
        },

        validate() {
            this.errors = [];

            if(!this.profile.username) this.errors.push("Name required.");
            if(!this.profile.email) this.errors.push("Email required.");
            if(!this.profile.firstName) this.errors.push("FirstName required.");
            if(!this.profile.lastName) this.errors.push("LastName required.");
            if(!this.profile.address) this.errors.push("Address required.");
            if(!this.profile.city) this.errors.push("City required.");
            if(!this.profile.country) this.errors.push("Country required.");
            if(!this.profile.zipCode) this.errors.push("ZipCode required.");

            return !this.errors.length;
        },
    },
}
</script>

<style lang="scss" scoped>
    .content {
        padding: 10px;
    }
</style>