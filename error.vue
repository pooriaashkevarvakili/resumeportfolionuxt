<template>
    <div style="height:30rem" class="w-full  flex  flex-col justify-center items-center">
        <img src="./public/404.jpg" />
        {{ error.message }}

        <div>
            {{ $t('notFound') }}
        </div>
    </div>
</template>
  
<script setup>
definePageMeta({
    layout: 'default'
})
defineProps(["error"]);
</script>
  
<style></style>