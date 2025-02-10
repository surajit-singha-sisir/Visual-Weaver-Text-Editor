<template>
    <section>
        <div class="modal-overlay" id="modal-overlay"></div>
        <!-- ANCHOR TAG LINK -->
        <div class="modal" id="modal1">
            <div class="f f-just-between pad-b--10">
                <h2>Insert Link</h2>
                <span class="close-btn" onclick="closeModal('modal1')"><i class="m-cross1"></i></span>
            </div>
            <div class="border-bottom"></div>
            <!-- MAIN CONTENT -->
            <div class="modal-main-contents">
                <div class="text-input" id="text-input">
                    <label for="text">Text to Display</label>
                    <input type="text" class="inputbox">
                </div>
                <div class="text-input" id="text-input">
                    <label for="text">URL Link</label>
                    <input type="text" class="inputbox">
                </div>
                <button class="btn btn-alert w--60">Add</button>
            </div>

            <section>

            </section>
        </div>

        <!-- ADD IMAGE -->
        <div class="modal" id="modal2">
            <div class="f f-just-between pad-b--10">
                <h2>Insert Image</h2>
                <span class="close-btn" onclick="closeModal('modal2')"><i class="m-cross1"></i></span>
            </div>
            <div class="border-bottom"></div>
            <!-- MAIN CONTENT -->
            <div class="preview-img preview" id="preview-img"></div>
            <div class="modal-main-contents">
                <div class="f f-col w-100 f-just-start gap-10">
                    <label for="text">Upload Image File <span class="Red">(only jpg or png)</span></label>
                    <div class="input-file">
                        <span>Select an Image File...</span>
                        <input type="file" class="inputbox" accept=".jpg, .png, .jpeg" multiple>
                    </div>
                    <div class="text-left">OR,</div>
                </div>
                <div class="text-input" id="text-input">
                    <label for="text">URL Link</label>
                    <input type="text" class="inputbox">
                </div>
                <button class="btn btn-alert w--60">Add</button>
            </div>

        </div>


        <!-- YOUTUBE -->
        <div class="modal" id="modal3">
            <div class="f f-just-between pad-b--10">
                <h2>Insert Youtube Video</h2>
                <span class="close-btn" onclick="closeModal('modal3')"><i class="m-cross1"></i></span>
            </div>
            <div class="border-bottom"></div>
            <!-- MAIN CONTENT -->
            <!-- PREVIEW -->
            <div class="preview-youtube preview" id="preview-youtube">
                <!-- https://www.youtube.com/embed/8uKgqqK2v4s?si=2UDoU80vrjH2ByG8 -->
                <iframe class="hide" width="360" height="215" src="" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="modal-main-contents">
                <div class="f f-col w-100 f-just-start gap-10">
                    <div class="text-input" id="text-input">
                        <label for="text">URL Link</label>
                        <input type="text" class="inputbox">
                    </div>
                    <span class="Gray"><u>Note:</u> Youtube Link Like <b
                            class="Red">https://youtu.be/8uKgqqK2v4s?si=hXwVk9BHYZFNzgWS</b><br> You can find this
                        link within video share button</span>

                </div>
                <button class="btn btn-alert w--60">Add</button>
            </div>
        </div>
    </section>
</template>