<template>
    <div class="container-fluid pt-3">
        <div class="form-row">
            <profile-preview></profile-preview>
            <edit-profile></edit-profile>
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
