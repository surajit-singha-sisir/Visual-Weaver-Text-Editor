<template>
    <!-- MEDIA LOAD -->
    <div class="files-load toolbar">
        <!-- LINK ANCHOR TAG -->
        <button type="button" class="vwbtn vwbtn-default anchor-tag" id="anchor-tag" tabindex="-1"
            aria-label="Anchor Tag (CTRL+ALT+L)" data-original-title="Anchor Tag (CTRL+ALT+L)"
            onclick="openModal('modal1')"><i class="m-link"></i></button>
        <!-- IMAGE -->
        <button type="button" class="vwbtn vwbtn-default image-file" id="image-file" tabindex="-1"
            aria-label="Add Image (CTRL+ALT+I)" data-original-title="Add Image (CTRL+ALT+I)"
            onclick="openModal('modal2')"><i class="m-image"></i></button>
        <!-- YOUTUBE VIDEO -->
        <button type="button" class="vwbtn vwbtn-default youtube-video" id="youtube-video" tabindex="-1"
            aria-label="Add Youtube Video (CTRL+ALT+V)" data-original-title="Add Youtube Video (CTRL+ALT+V)"
            onclick="openModal('modal3')"><i class="m-youtube3"></i></button>
    </div>
</template>