<template>
    <section class="py-8">
        <div class="flex flex-wrap md:px-4">
            <div class="w-full">
                <about />

                <Skills />

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue';
useSeoMeta({
    title: 'about',
})


</script>

<style>
#ltr {
    direction: ltr
}
</style>