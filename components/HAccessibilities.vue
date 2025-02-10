<template>
    <!-- ACCESIBILITIES -->
    <div class="accessibilities toolbar">
        <!-- FULL SCREEN -->
        <button type="button" class="vwbtn vwbtn-default full-screen" id="full-screen" tabindex="-1"
            aria-label="Full Screen (CTRL+M)" data-original-title="Full Screen (CTRL+M)" onclick="fullscreen()"><i
                class="m-fullscreen"></i></button>
        <!-- CODE VIEW -->
        <button type="button" class="vwbtn vwbtn-default code-view" id="code-view" tabindex="-1"
            aria-label="Code View (CTRL+,)" data-original-title="Code View (CTRL+,)"><i class="m-code1"></i></button>
        <!-- GET HELP -->
        <button type="button" class="vwbtn vwbtn-default get-help" id="get-help" tabindex="-1"
            aria-label="Get Help (CTRL+?)" data-original-title="Get Help (CTRL+?)"><i
                class="m-question-mark"></i></button>
    </div>
</template>