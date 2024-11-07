<script setup>
    import thanksData from '@/assets/thanksData.mjs';
</script>


<template>
    <Banner class="banner-thanks" type="page" title="致謝列表" desc="感謝有你們，本站前進的動力。"></Banner>
    <LinkList :listData="thanksData" :useFriendsLink="true" />
</template>

<style lang="scss">
.banner-thanks {
    min-height: 0 !important;
}
</style>