<template>
    <div class="py-4">
        <div class="flex flex-wrap">
            <div class="w-full">
                <div class="md:mx-4 md:px-4 2xl:ml-0 xl:ml-0 lg:ml-0 ml-32">
                    <h3 dir="auto"
                        class="text-2xl mr-20 md:-mr-2 4xl:mr-32 sm:mr-24  text-center dark:text-white text-gray-800 font-bold mb-4">
                        {{ $t('Skills', {
                            name:
                                'Skills'
                        })
                        }}</h3>
                </div>
            </div>
            <section class="pb-10">
                <div class="flex flex-wrap md:px-4 ml-16 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0">
                    <div v-for="item in skills" :key="item.id"
                        class="w-full   4xl:ml-6  2xl:w-1/2 xl:w-1/2 lg:w-1/2  4xl:w-8/12 sm:w-full md:w-full  5xl:w-full 2xl:ml-0 xl:ml-0 lg:ml-0 md:-ml-2 sm:ml-0 ">
                        <div class="my-4 md:mx-4 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                            <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                                <img :src="item.src" alt="coverImage" class="w-full h-full object-cover object-center" />
                                <div
                                    class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                                    <ul class="flex flex-wrap">

                                    </ul>
                                </div>
                            </div>
                            <h3 class="text-lg text-center dark:text-white font-medium text-gray-800 mb-2">
                                {{ item.title }}
                            </h3>

                        </div>
                    </div>



                </div>
            </section>

        </div>
    </div>
</template>

<script setup>

const skills = [
    {
        id: 0,
        src: 'html.png',
        title: "html"


    },
    {
        id: 1,
        src: "css.png",
        title: 'css'


    },
    {
        id: 2,
        src: "bootstrap.png",
        title: 'bootstrap'


    },
    {
        id: 3,
        src: "tailwind.png",
        title: 'tailwind'


    },
    {
        id: 4,
        src: "supabase.jpg",
        title: 'supabase'


    }, {
        id: 5,
        src: "javascript.png",
        title: 'javascript'


    },
    {
        id: 6,
        src: "typescript.png",
        title: 'typescript'

    },
    {
        id: 7,
        src: "vue.png",
        title: "vue"


    },
    {
        id: 8,
        src: "react.png",
        title: "react"


    },
    {
        id: 8,
        src: "react.png",
        title: "context-api"


    },
    {
        id: 9,
        src: "nuxt.png",
        title: "nuxtjs"


    },
    {
        id: 10,
        src: "nextjs.png",
        title: "nextjs"


    },
    {
        id: 11,
        src: "git.png",
        title: "git"



    },





    {
        id: 12,
        src: "postman.png",
        title: 'postman'

    },

    {
        id: 13,
        src: "pinia.png",
        title: 'pinia'

    },

]
</script>

<style></style>