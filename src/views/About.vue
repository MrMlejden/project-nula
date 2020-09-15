<template>
    <div class="main-panel">
        <div class="col-lg-12">
            <div class="container d-flex">
                <div class="row">
                    <div class="d-flex">
                        <profile-preview></profile-preview>
                        <edit-profile></edit-profile>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import profilePreview from '@/components/profilePreview';
import editProfile from '@/components/editProfile';

export default {
    name: 'about',
    components: { profilePreview, editProfile }
};
</script>
