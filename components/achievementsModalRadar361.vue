<template>
    <div>
        <div dir="auto">
            <a class="text-gray-400 dark:text-white" href="#openModal-radar361">{{ $t('achievements') }}
            </a>
        </div>

        <div id="openModal-radar361"
            class="modalDialog fixed top-0 left-0 pointer-events-none	 opacity-0	 right-0 bottom-0 ">
            <div dir="auto">
                <a href="#close" title="Close"
                    class="close bg-red-400 hover:bg-red-500 absolute -right-3 -top-2.5 no-underline pt-1 font-bold rounded-full leading-6 w-9 h-9	text-center text-white">X</a>
                <h2>{{ $t('achievements') }}</h2>
                <hr class="mt-2" />
                <div dir="auto" class=" 2xl:block mt-5 xl:block lg:block  ">
                    <p class="text-base  dark:text-white font-medium text-slate-700 group-hover:text-slate-900">
                        {{
                            $t('ahievementsModalRadar361', {
                                name:
                                    'ahievementsModalRadar361'
                            }) }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style>
.modalDialog {

    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;

    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;

}

.modalDialog:target {
    @apply pointer-events-auto opacity-100;


}

.modalDialog>div {
    @apply w-11/12 relative rounded-sm bg-white max-w-xl p-5;
    margin: 10% auto;



}

@media only screen and (max-width: 540px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

@media only screen and (max-width: 412px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

@media only screen and (max-width: 360px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

.close {
    font-family: Arial, Helvetica, sans-serif;

    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;


}
</style>