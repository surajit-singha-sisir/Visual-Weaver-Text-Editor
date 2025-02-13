<template>
    <main>
        <div class="k2d f w-100 pad-tb--20">
            <h1 style="font-size: 2rem; border: 1px solid #3ba1f5;" class="w-100 text-center pad--10">VISUAL WEAVER
                <p class="text--12 Gray">An Open-source Web wysiwyg editor</p>
            </h1>

        </div>
        <!-- VISUAL WEAVER EDITOR -->
        <!-- <textarea name="visual-weaver" class="hide" id="visual-weaver" aria-label="Visual Weaver">
    </textarea> -->

        <aside class="visual-weaver">


            <!-- TOOLS -->
            <div class="editor-head" id="editor-head" target-mode="default" target-theme="default">

                <!-- REDO UNDO ACTION -->
                <div class="text-face toolbar">
                    <!-- UNDO -->
                    <button type="button" class="vwbtn vwbtn-default undo" id="undo" tabindex="-1"
                        aria-label="Undo (CTRL+Z)" data-original-title="Undo (CTRL+Z)" @click="undo"
                        :class="{ 'pressed': editor?.isActive('undo') }"><i class="m-undo"></i></button>
                    <!-- REDO -->
                    <button :class="{ 'pressed': editor?.isActive('redo') }" type="button"
                        class="vwbtn vwbtn-default redo" id="redo" tabindex="-1" aria-label="Redo (CTRL+SHIFT+Z)"
                        data-original-title="Redo (CTRL+SHIFT+Z)" @click="redo"><i class="m-redo"></i></button>
                </div>

                <!-- TEXT FACES -->
                <div class="text-face toolbar">
                    <!-- BOLD -->
                    <button :class="{ 'pressed': editor?.isActive('bold') }" type="button"
                        class="vwbtn vwbtn-default bold" id="bold" tabindex="-1" aria-label="Bold (CTRL+B)"
                        data-original-title="Bold (CTRL+B)" @click="bold"><i class="m-bold"></i></button>
                    <!-- ITALIC -->
                    <button :class="{ 'pressed': editor?.isActive('italic') }" type="button"
                        class="vwbtn vwbtn-default italic " id="italic" tabindex="-1" aria-label="Italic (CTRL+I)"
                        data-original-title="Italic (CTRL+I)" @click="italic"><i class="m-italic"></i></button>
                    <!-- UNDERLINE -->
                    <button :class="{ 'pressed': editor?.isActive('underline') }" type="button"
                        class="vwbtn vwbtn-default underline" id="underline" tabindex="-1"
                        aria-label="Underline (CTRL+U)" data-original-title="Underline (CTRL+U)" @click="underline"><i
                            class="m-underline"></i></button>
                    <!-- SUPERSCRIPT -->
                    <button :class="{ 'pressed': editor?.isActive('superscript') }" type="button"
                        class="vwbtn vwbtn-default superscript" id="superscript" tabindex="-1"
                        aria-label="Supperscript (CTRL+.)" data-original-title="Supperscript (CTRL+.)"
                        @click="superscript"><i class="m-superscript"></i></button>
                    <!-- SUBSCRIPT -->
                    <button :class="{ 'pressed': editor?.isActive('subscript') }" type="button"
                        class="vwbtn vwbtn-default subscript" id="subscript" tabindex="-1"
                        aria-label="Subscript (CTRL+,)" data-original-title="Subscript (CTRL+,)" @click="subscript"><i
                            class="m-subscript"></i></button>
                    <!-- STRIKE THROUGH -->
                    <button :class="{ 'pressed': editor?.isActive('strike') }" type="button"
                        class="vwbtn vwbtn-default strikethrough" id="strikethrough" tabindex="-1"
                        aria-label="Strike Through (CTRL+SHIFT+S)" data-original-title="Strike Through (CTRL+SHIFT+S)"
                        @click="strikethrough"><i class="m-strikethrough"></i></button>
                    <!-- HIGHLIGHT -->
                    <button :class="{ 'pressed': editor?.isActive('strike') }" type="button"
                        class="vwbtn vwbtn-default highlight" id="highlight" tabindex="-1"
                        aria-label="Hightlighter (CTRL+SHIFT+H)" data-original-title="Hightlighter (CTRL+SHIFT+H)"
                        @click="highlight"><i class="m-brush"></i></button>
                    <!-- ERASE STYLES -->
                    <button type="button" class="vwbtn vwbtn-default erase-style" id="erase-style" tabindex="-1"
                        aria-label="Erase Styles (CTRL+/)" data-original-title="Erase Styles (CTRL+/)"
                        @click="eraseStyle"><i class="m-eraser"></i></button>
                </div>

                <!-- TEXT SIZER & FAMILY -->
                <div class="text-sizer-family toolbar">


                    <!-- FONT SIZER -->
                    <div class="relative" tabindex="-1" aria-label="Font Size (CTRL+ALT+(1-6))"
                        data-original-title="Font Size (CTRL+ALT+(1-6))">

                        <select name="fontSize" id="fontSize" class="vwbtn vwbtn-default w--100i"
                            v-model="selectedFontSize" @change="getFontSize">
                            <option value="default" selected disabled>Headline</option>
                            <option value="1" tabindex="-1" aria-label="Heading 1 (CTRL+ALT+1)"
                                data-original-title="Heading 1 (CTRL+ALT+1)">H1</option>
                            <option value="2" tabindex="-1" aria-label="Heading 2 (CTRL+ALT+2)"
                                data-original-title="Heading 2 (CTRL+ALT+2)">H2</option>
                            <option value="3" tabindex="-1" aria-label="Heading 3 (CTRL+ALT+3)"
                                data-original-title="Heading 3 (CTRL+ALT+3)">H3</option>
                            <option value="4" tabindex="-1" aria-label="Heading 4 (CTRL+ALT+4)"
                                data-original-title="Heading 4 (CTRL+ALT+4)">H4</option>
                            <option value="5" tabindex="-1" aria-label="Heading 5 (CTRL+ALT+5)"
                                data-original-title="Heading 5 (CTRL+ALT+5)">H5</option>
                            <option value="6" tabindex="-1" aria-label="Heading 6 (CTRL+ALT+6)"
                                data-original-title="Heading 6 (CTRL+ALT+6)">H6</option>
                        </select>

                    </div>


                    <!-- FONT FAMILY -->

                    <select name="fontFamily" id="fontFamily" class="vwbtn vwbtn-default extent-2x-width" tabindex="-1"
                        aria-label="Font Family (CTRL+F)" data-original-title="Font Family (CTRL+F)"
                        v-model="selectedFontFamily" @change="changeFontFamily">
                        <option value="default" selected disabled>Select Font</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Arial">Arial</option>
                        <option value="K2D">K2D</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Open Sans">Open Sans</option>
                        <option value="Lato">Lato</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Nunito Sans">Nunito Sans</option>
                        <option value="Merriweather">Merriweather</option>
                        <option value="Playfair Display">Playfair Display</option>
                        <option value="Lora">Lora</option>
                        <option value="SolaimanLipi">SolaimanLipi</option>
                        <option value="Kalpurush">Kalpurush</option>
                        <option value="Sutonny">Sutonny</option>
                        <option value="Baloo Da">Baloo Da</option>
                        <option value="BenSen">BenSen</option>
                        <option value="BenSen Handwriting">BenSen Handwriting</option>
                    </select>

                </div>


                <!-- TEXT ALIGNMENTS -->
                <div class="text-alignments toolbar">
                    <!-- LEFT ALIGNMENT -->
                    <button :class="{ 'pressed': editor?.isActive('left') }" @click="alignLeft" type="button"
                        class="vwbtn vwbtn-default left-align" id="left-align" tabindex="-1"
                        aria-label="Left-align (CTRL+SHIFT+L)" data-original-title="Left-align (CTRL+SHIFT+L)"><i
                            class="m-m-text-left"></i></button>
                    <!-- CENTER ALIGNMENT -->
                    <button :class="{ 'pressed': editor?.isActive('center') }" @click="alignCenter" type="button"
                        class="vwbtn vwbtn-default center-align" id="center-align" tabindex="-1"
                        aria-label="Center-align (CTRL+SHIFT+E)" data-original-title="Center-align (CTRL+SHIFT+E)"><i
                            class="m-m-text-center"></i></button>
                    <!-- RIGHT ALIGNMENT -->
                    <button :class="{ 'pressed': editor?.isActive('right') }" @click="alignRight" type="button"
                        class="vwbtn vwbtn-default right-align" id="right-align" tabindex="-1"
                        aria-label="Right-align (CTRL+SHIFT+R)" data-original-title="Right-align (CTRL+SHIFT+R)"><i
                            class="m-m-text-right"></i></button>
                    <!-- JUSTIFY ALIGNMENT -->
                    <button :class="{ 'pressed': editor?.isActive('justify') }" @click="alignJustify" type="button"
                        class="vwbtn vwbtn-default justify-align" id="justify-align" tabindex="-1"
                        aria-label="Justify-align (CTRL+SHIFT+J)" data-original-title="Justify-align (CTRL+SHIFT+J)"><i
                            class="m-align-justify" style="font-size: 1.2rem;"></i></button>
                </div>

                <!-- TEXT COLORS -->
                <div class="text-colors toolbar">

                    <!-- FONT COLOR -->
                    <button :class="{ 'pressed': editor?.isActive('textStyle', { color: '#958DF1' }) }" type="button"
                        class="vwbtn vwbtn-default fontColor" id="fontColor" tabindex="-1" aria-label="Font Color"
                        data-original-title="Font Color" @click="toggleFontColorModal">
                        <i class="m-text-color"></i>
                    </button>

                    <div class="fontColorModal colorModal" :class="{ hidei: !isFontColorModalVisible }"
                        ref="fontColorModal">
                        <button class="w-100 m-b--05" aria-label="Pick a Color"
                            data-original-title="Pick a Color"><input type="color" @input="onFontColorChange($event)"
                                class="w-100 b-none"></button>
                        <button v-for="color in colors" :key="color.name" class="color-box btn"
                            :style="`background-color: ${color.code};`" :aria-label="color.name"
                            :data-original-title="color.name"> </button>
                    </div>

                    <!-- BACKGROUND COLOR -->
                    <button :class="{ 'pressed': editor?.isActive('color') }" type="button"
                        class="vwbtn vwbtn-default backgroundColor" id="backgroundColor" tabindex="-1"
                        aria-label="background Color" data-original-title="background Color"
                        @click="toggleBackgroundColorModal">
                        <i class="m-palette"></i>
                    </button>

                    <div class="fontColorModal colorModal" :class="{ hidei: !isBackgroundColorModalVisible }"
                        ref="backgroundColorModal">
                        <button class="w-100 m-b--05" ref="BackgroundColorBanner">Background Color</button>
                        <button v-for="color in colors" :key="color.name" class="color-box btn"
                            :style="`background-color: ${color.code};`" :aria-label="color.name"
                            :data-original-title="color.name">
                        </button>
                    </div>



                </div>


                <!-- ORDER LIST -->
                <div class="text-lists toolbar">

                    <!-- DISC BULLET -->
                    <button :class="{ 'pressed': editor?.isActive('toggleBulletList') }" @click="discBullet"
                        type="button" class="vwbtn vwbtn-default disc-bullet" id="disc-bullet" tabindex="-1"
                        aria-label="Disc Bullet (CTRL+SHIFT+C)" data-original-title="Disc Bullet (CTRL+SHIFT+C)"><i
                            class="m-list2"></i></button>
                    <!-- SQUARE BULLET (BETA) -->
                    <!-- <button :class="{ 'pressed': editor?.isActive('toggleBulletList') }" @click="squareBullet" type="button" class="vwbtn vwbtn-default square-bullet" id="square-bullet" tabindex="-1"
                        aria-label="Square Bullet (CTRL+SHIFT+S)" data-original-title="Square Bullet (CTRL+SHIFT+S)"><i
                            class="m-list"></i></button> -->
                    <!-- DECIMAL BULLET -->
                    <button :class="{ 'pressed': editor?.isActive('toggleBulletList') }" @click="numberBullet"
                        type="button" class="vwbtn vwbtn-default decimal-bullet" id="decimal-bullet" tabindex="-1"
                        aria-label="Decimal Bullet (CTRL+SHIFT+D)"
                        data-original-title="Decimal Bullet (CTRL+SHIFT+D)"><i class="m-list-numbered"></i></button>
                </div>


                <!-- TABLE MAKER -->
                <div class="text-table toolbar">

                    <!-- TABLE -->
                    <section class="popup-view">
                        <button :class="{ 'pressed': editor?.isActive('table') }" @click="toggleTableVisibility"
                            type="button" class="vwbtn vwbtn-default table-maker" id="table-maker" tabindex="-1"
                            aria-label="Create Table" data-original-title="Create Table"><i
                                class="m-table2"></i></button>

                        <!-- TABLE POPUP -->
                        <div :class="{ hidei: !isTableVisible }" ref="addTable" class="table-inputs">
                            <input type="number" placeholder="Row" min="0" step="1">
                            <input type="number" placeholder="Col" min="0" step="1">
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                    </section>

                    <button :class="{ 'pressed': editor?.isActive('blockquote') }" @click="quote" type="button"
                        class="vwbtn vwbtn-default quote-sign z-1" id="quote-sign" tabindex="-1"
                        aria-label="Quote (CTRL+SHIFT+B)" data-original-title="Quote (CTRL+SHIFT+B)"><i
                            class="m-quote1"></i></button>
                </div>


                <!-- MEDIA LOAD -->
                <div class="files-load toolbar">
                    <!-- LINK ANCHOR TAG -->
                    <button :class="{ 'is-active': editor?.isActive('link') }" type="button"
                        class="vwbtn vwbtn-default anchor-tag" id="anchor-tag" tabindex="-1"
                        aria-label="Anchor Tag (CTRL+ALT+L)" data-original-title="Anchor Tag (CTRL+ALT+L)"
                        @click="openModal('modal1')">
                        <i class="m-link"></i>
                    </button>

                    <!-- IMAGE -->
                    <button type="button" class="vwbtn vwbtn-default image-file" id="image-file" tabindex="-1"
                        aria-label="Add Image (CTRL+ALT+I)" data-original-title="Add Image (CTRL+ALT+I)"
                        @click="openModal('modal2')">
                        <i class="m-image"></i>
                    </button>

                    <!-- YOUTUBE VIDEO -->

                    <!-- :class="{ 'pressed': editor?.isActive('bold') }" -->
                    <button type="button" class="vwbtn vwbtn-default youtube-video" id="youtube-video" tabindex="-1"
                        aria-label="Add Youtube Video (CTRL+ALT+V)" data-original-title="Add Youtube Video (CTRL+ALT+V)"
                        @click="openModal('modal3')">
                        <i class="m-youtube3"></i>
                    </button>

                    <!-- Modal Overlay -->
                    <div v-if="modalActive" class="modal-overlay" @click="closeModal"></div>

                    <!-- ANCHOR TAG LINK -->
                    <div v-if="activeModal === 'modal1'" class="modal active">
                        <div class="f f-just-between pad-b--10">
                            <h2>Insert Link</h2>
                            <span class="close-btn" @click="closeModal">
                                <i class="m-cross1"></i>
                            </span>
                        </div>
                        <div class="border-bottom"></div>
                        <!-- MAIN CONTENT -->
                        <div class="modal-main-contents">
                            <input type="text" v-model="linkUrl" class="inputbox" placeholder="URL Link" />
                            <button class=" bg-Alert w--60" @click="addLink">Add</button>
                        </div>
                    </div>

                    <!-- ADD IMAGE -->
                    <div v-if="activeModal === 'modal2'" class="modal active">
                        <div class="f f-just-between pad-b--10">
                            <h2>Insert Image</h2>
                            <span class="close-btn" @click="closeModal">
                                <i class="m-cross1"></i>
                            </span>
                        </div>
                        <div class="border-bottom"></div>
                        <!-- MAIN CONTENT -->
                        <div class="preview-img preview" id="preview-img">
                            <img v-if="imageSrc" :src="imageSrc" alt="Image Preview" />
                        </div>
                        <div class="modal-main-contents">
                            <div class="f f-col w-100 f-just-start gap-10">
                                <label for="text">Upload Image File <span class="Red">(only jpg or png)</span></label>
                                <div class="input-file">
                                    <span ref="fileNameRef">Select an Image File...</span>
                                    <input type="file" class="inputbox" accept=".jpg, .png, .jpeg" multiple
                                        @change="handleImageUpload" />
                                </div>
                                <div class="text-left">OR,</div>
                            </div>
                            <input type="text" v-model="imageUrl" class="inputbox" placeholder="URL Link"
                                @input="updateImagePreview" />

                            <button class="bg-Alert w--60" @click="addImage">Add</button>
                        </div>
                    </div>

                    <!-- YOUTUBE -->
                    <div v-if="activeModal === 'modal3'" class="modal active">
                        <div class="f f-just-between pad-b--10">
                            <h2>Insert Youtube Video</h2>
                            <span class="close-btn" @click="closeModal">
                                <i class="m-cross1"></i>
                            </span>
                        </div>
                        <div class="border-bottom"></div>
                        <!-- MAIN CONTENT -->
                        <div class="preview-youtube preview" id="preview-youtube">
                            <iframe v-if="youtubeUrl" ref="generateEmbedUrlNew" :src="generateEmbedUrl(youtubeUrl)"
                                width="360" height="215" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                        </div>
                        <div class="modal-main-contents">
                            <div class="f f-col w-100 f-just-start gap-10">
                                <input type="text" v-model="youtubeUrl" class="inputbox" placeholder="URL Link" />
                                <span class="Gray">
                                    <u>Note:</u> YouTube Link Like <b
                                        class="Red">https://youtu.be/8uKgqqK2v4s?si=hXwVk9BHYZFNzgWS</b><br />
                                    You can find this link within the video share button
                                </span>
                            </div>
                            <button class=" bg-Alert w--60" @click="addYouTube">Add</button>
                        </div>
                    </div>
                </div>





                <!-- ACCESIBILITIES -->
                <div class="accessibilities toolbar">
                    <!-- FULL SCREEN -->
                    <button type="button" class="vwbtn vwbtn-default full-screen" id="full-screen" tabindex="-1"
                        aria-label="Full Screen" data-original-title="Full Screen | Esc to Exit" ref="pressed1"
                        @click="toggleFullscreen">
                        <i class="m-fullscreen"></i>
                    </button>
                    <!-- CODE VIEW -->
                    <!-- <button type="button" class="vwbtn vwbtn-default code-view" id="code-view" tabindex="-1"
                        aria-label="Code View (CTRL+,)" data-original-title="Code View (CTRL+,)" ref="pressed2"><i
                            class="m-code1"></i></button> -->


                    <!-- <div v-if="isCodeView">
                        <pre>{{ htmlContent }}</pre>
                    </div>
                    <div v-else>
                        <div class="editor-content">
                            {{ htmlContent }}
                        </div>
                    </div> -->

                    <button type="button" class="vwbtn vwbtn-default code-view" id="code-view" tabindex="-1"
                        aria-label="Code View (CTRL+,) " data-original-title="Code View (CTRL+,)"
                        @click="toggleCodeView">
                        <i class="m-code1"></i>
                    </button>


                    <!-- GET HELP -->
                    <button type="button" class="vwbtn vwbtn-default get-help" id="get-help" tabindex="-1"
                        aria-label="Get Help (CTRL+?)" data-original-title="Get Help (CTRL+?)" ref="pressed3"><i
                            class="m-question-mark"></i></button>
                </div>
            </div>



            <editor-content :editor="editor" class="editor editor-body editor-section m-b--50" />
            <!-- Code View Section -->
            <div v-if="isCodeView">
                <div class="editor editor-body editor-section" rows="10" cols="50">
                    <div ref="htmlContent" contenteditable="true" role="textbox" translate="no"
                        class="tiptap ProseMirror" tabindex="0">

                    </div>
                </div>
            </div>
        </aside>
        <footer class="footer w-100 f-centered pad--10 bg-Teal fixed White pos-bottom-center">
            <div>Copyrights &copy; 2025 | Developed by <a class="btn btn-love Yellow" href="https://kehem.com">KEHEM IT</a></div>
        </footer>
    </main>
</template>

<style lang="scss">
@use '@/assets/styles/editor.scss' as *;

body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    box-sizing: border-box;
}

body::-webkit-scrollbar {
    scrollbar-width: none;
}

.editor-body {
    height: 50vh;


    .ProseMirror {
        height: 100%;
        padding: 0.5rem;

        &:focus-visible {
            outline: none;
        }
    }
}


.combo-option {
    position: relative;
}

.combo-box .Combo-inputbox .combo-input {
    background-color: transparent;
    outline: none;
}


.colorModal {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2rem;
    padding: 0.5rem;
    width: 10rem;
    background: #f4f4f4;
    border: 1px solid $border;
    z-index: 999;
}

.color-box {
    position: relative;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    box-shadow: 2px 2px 3px #00000033;
}

.colorModal {
    transition: opacity 0.3s ease;
    opacity: 0;
    pointer-events: none;
    /* Prevent interaction when hidden */
}

/* Show the modal when active */
.colorModal:not(.hidei) {
    opacity: 1;
    pointer-events: auto;
}
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import FontFamily from '@tiptap/extension-font-family';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import { Color } from '@tiptap/extension-color';

import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import Link from '@tiptap/extension-link';
import { YoutubeResize } from '@anilkumarthakur/tiptap-extension-resize-youtube';
import ImageResize from 'tiptap-extension-resize-image';


const editor = useEditor({
    content: '<p>Hello, start editing...</p>',
    extensions: [
        StarterKit,
        Underline,
        TextStyle,
        Highlight,
        FontFamily,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Superscript,
        Subscript,
        Color,
        Table.configure({
            resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        Link,
        YoutubeResize.configure({
            controls: true,
            nocookie: true,
            width: 320,
            height: 240,
            allowFullscreen: true,
            autoplay: false,
        }),
        ImageResize,
    ],
});


const isCodeView = ref(false);
const htmlContent = ref<string | null>(null);
const maineditor = ref();

const toggleCodeView = () => {
    maineditor.value.classList.toggle("hidei");
    isCodeView.value = !isCodeView.value;

    if (isCodeView.value) {
        htmlContent.value = editor.value?.getHTML() || '';
        console.log('HTML Content:', htmlContent.value);
    } else {
        maineditor.value?.classList.toggle("hidei");
        if (htmlContent.value) {
            editor.value?.commands.setContent(htmlContent.value);
        }
    }
};


// DISC BULLET
const discBullet = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleBulletList().run();
    }
}
// SQUARE BULLET (BETA)
const squareBullet = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleBulletList().run();
    }
}
// NUMBER BULLET
const numberBullet = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleOrderedList().run();
    }
}







const colors =
    [
        { "code": "#FFFFFF", "name": "White" },
        { "code": "#000000", "name": "Black" },
        { "code": "#FF0000", "name": "Red" },
        { "code": "#00FF00", "name": "Green" },
        { "code": "#0000FF", "name": "Blue" },
        { "code": "#FFFF00", "name": "Yellow" },
        { "code": "#00FFFF", "name": "Cyan" },
        { "code": "#FF00FF", "name": "Magenta" },
        { "code": "#00000000", "name": "Transparent" },

        { "code": "#800000", "name": "Maroon" },
        { "code": "#808000", "name": "Olive" },
        { "code": "#008080", "name": "Teal" },
        { "code": "#800080", "name": "Purple" },
        { "code": "#808080", "name": "Gray" },
        { "code": "#C0C0C0", "name": "Silver" },

        { "code": "#424242", "name": "Tundora" },
        { "code": "#636363", "name": "Dove Gray" },
        { "code": "#9C9C94", "name": "Star Dust" },
        { "code": "#CEC6CE", "name": "Pale Slate" },
        { "code": "#EFEFEF", "name": "Gallery" },
        { "code": "#F7F7F7", "name": "Alabaster" },
        { "code": "#D3D3D3", "name": "Light Gray" },
        { "code": "#A9A9A9", "name": "Dark Gray" },

        { "code": "#E79C9C", "name": "Tonys Pink" },
        { "code": "#E76363", "name": "Mandy" },
        { "code": "#CE0000", "name": "Guardsman Red" },
        { "code": "#9C0000", "name": "Sangria" },
        { "code": "#630000", "name": "Rosewood" },
        { "code": "#F08080", "name": "Light Coral" },
        { "code": "#FA8072", "name": "Light Salmon" },
        { "code": "#FFB6C1", "name": "Light Pink" },
        { "code": "#FFC0CB", "name": "Pink" },
        { "code": "#FF69B4", "name": "Hot Pink" },
        { "code": "#FF1493", "name": "Deep Pink" },
        { "code": "#C71585", "name": "Medium Violet Red" },
        { "code": "#DB7093", "name": "Pale Violet Red" },
        { "code": "#FF7F50", "name": "Coral" },
        { "code": "#FF4500", "name": "Orange Red" },
        { "code": "#FF6347", "name": "Tomato" },
        { "code": "#FFA07A", "name": "Light Salmon" },
        { "code": "#E9967A", "name": "Dark Salmon" },
        { "code": "#DC143C", "name": "Crimson" },

        { "code": "#FF9C00", "name": "Orange Peel" },
        { "code": "#FFC69C", "name": "Peach Orange" },
        { "code": "#FFE79C", "name": "Cream Brulee" },
        { "code": "#F7AD6B", "name": "Rajah" },
        { "code": "#FFD663", "name": "Dandelion" },
        { "code": "#E79439", "name": "Fire Bush" },
        { "code": "#EFC631", "name": "Golden Dream" },
        { "code": "#B56308", "name": "Mai Tai" },
        { "code": "#BD9400", "name": "Buddha Gold" },
        { "code": "#FFD700", "name": "Gold" },
        { "code": "#FFA500", "name": "Orange" },

        { "code": "#ADFF2F", "name": "Green Yellow" },
        { "code": "#7FFF00", "name": "Chartreuse" },
        { "code": "#76EE00", "name": "Lawn Green" },
        { "code": "#00FA9A", "name": "Medium Spring Green" },
        { "code": "#00FF7F", "name": "Spring Green" },
        { "code": "#006400", "name": "Dark Green" },
        { "code": "#98FB98", "name": "Pale Green" },
        { "code": "#8FBC8F", "name": "Dark Sea Green" },
        { "code": "#3CB371", "name": "Medium Sea Green" },
        { "code": "#20B2AA", "name": "Light Sea Green" },
        { "code": "#90EE90", "name": "Light Green" },

        { "code": "#40E0D0", "name": "Turquoise" },
        { "code": "#48D1CC", "name": "Medium Turquoise" },
        { "code": "#AFEEEE", "name": "Pale Turquoise" },
        { "code": "#E0FFFF", "name": "Light Cyan" },
        { "code": "#ADD8E6", "name": "Light Blue" },
        { "code": "#87CEEB", "name": "Sky Blue" },
        { "code": "#87CEFA", "name": "Light Sky Blue" },
        { "code": "#00BFFF", "name": "Deep Sky Blue" },
        { "code": "#1E90FF", "name": "Dodger Blue" },
        { "code": "#4682B4", "name": "Steel Blue" },
        { "code": "#5F9EA0", "name": "Cadet Blue" }
    ];
const isFontColorModalVisible = ref(false);
const isBackgroundColorModalVisible = ref(false);

const toggleFontColorModal = () => {
    isFontColorModalVisible.value = !isFontColorModalVisible.value;
    if (isFontColorModalVisible.value) {
        isBackgroundColorModalVisible.value = false;
    }
};
const toggleBackgroundColorModal = () => {
    isBackgroundColorModalVisible.value = !isBackgroundColorModalVisible.value;
    if (isBackgroundColorModalVisible.value) {
        isFontColorModalVisible.value = false;
    }
};
const isTableVisible = ref(false);

const toggleTableVisibility = () => {
    isTableVisible.value = !isTableVisible.value;
};
const closeOnOutsideClick = (event: MouseEvent) => {
    const fontColorModal = document.querySelector('.fontColorModal') as HTMLElement;
    const backgroundColorModal = document.querySelector('.colorModal') as HTMLElement;
    const fontColorButton = document.querySelector('#fontColor') as HTMLElement;
    const backgroundColorButton = document.querySelector('#backgroundColor') as HTMLElement;
    const tableModal = document.querySelector('.table-inputs') as HTMLElement;
    const tableButton = document.querySelector('#table-maker') as HTMLElement;

    // Close Font Color Modal if clicked outside
    if (fontColorModal && !fontColorModal.contains(event.target as Node) && !fontColorButton.contains(event.target as Node)) {
        isFontColorModalVisible.value = false;
    }

    // Close Background Color Modal if clicked outside
    if (backgroundColorModal && !backgroundColorModal.contains(event.target as Node) && !backgroundColorButton.contains(event.target as Node)) {
        isBackgroundColorModalVisible.value = false;
    }

    // Close Table Modal if clicked outside
    if (tableModal && !tableModal.contains(event.target as Node) && !tableButton.contains(event.target as Node)) {
        isTableVisible.value = false;
    }
};

const onFontColorChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const color = input.value;
    if (editor.value) {
        editor.value.chain().focus().setColor(color).run();
    }
};

const fontColorModal = ref<HTMLElement | null>(null);
const backgroundColorModal = ref<HTMLElement | null>(null);


const alignLeft = () => {
    if (editor.value) {
        editor.value.chain().focus().setTextAlign('left').run();
    }
}
const alignCenter = () => {
    if (editor.value) {
        editor.value.chain().focus().setTextAlign('center').run();
    }
}
const alignRight = () => {
    if (editor.value) {
        editor.value.chain().focus().setTextAlign('right').run();
    }
}
const alignJustify = () => {
    if (editor.value) {
        editor.value.chain().focus().setTextAlign('justify').run();
    }
}



// TEXT RESIZER AND FAMILY
const selectedFontSize = ref("default");
const selectedFontFamily = ref("default");

// SET FONT FAMILY
const changeFontFamily = () => {
    if (editor.value) {
        editor.value.chain().focus().setFontFamily(selectedFontFamily.value).run();
        setTimeout(() => {
            selectedFontSize.value = "default";
        }, 3000);
    }
};

// SET FONT SIZE
const getFontSize = () => {
    if (editor.value) {
        const levelValue = Number(selectedFontSize.value) as 1 | 2 | 3 | 4 | 5 | 6;
        editor.value.chain().focus().toggleHeading({ level: levelValue }).run();
    }
};




// BLOCKQUOTE
const quote = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleBlockquote().run();
    }
}










// UNDO
const undo = () => {
    if (editor.value) {
        editor.value.chain().focus().undo().run();
    }
};

// REDO
const redo = () => {
    if (editor.value) {
        editor.value.chain().focus().redo().run();
    }
};

// BOLD
const bold = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleBold().run();
    }
};
// ITALIC
const italic = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleItalic().run();
    }
};

// UNDERLINE
const underline = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleUnderline().run();
    }
};
// SUPERSCRIPT
const superscript = () => {
    if (editor.value) {
        editor.value.chain().focus().setSuperscript().run();
    }
};
// SUBSCRIPT
const subscript = () => {
    if (editor.value) {
        editor.value.chain().focus().setSubscript().run();
    }
};
// STRIKE THROUGH
const strikethrough = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleStrike().run();
    }
};
// HIGHLIGHT
const highlight = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleHighlight().run();
    }
};

// CLEAR STYLE
const eraseStyle = () => {
    if (editor.value) {
        editor.value.chain().focus().unsetAllMarks().run();
    }
};


const modalActive = ref(false);
const activeModal = ref<string | null>(null);
const linkUrl = ref('');
const imageUrl = ref('');
const youtubeUrl = ref('');

const openModal = (modalId: string) => {
    activeModal.value = modalId;
    modalActive.value = true;
    linkUrl.value = '';
    imageUrl.value = '';
    youtubeUrl.value = '';
    imageSrc.value = '';
};

const closeModal = () => {
    modalActive.value = false;
    activeModal.value = null;

};

const addLink = () => {
    const link = linkUrl.value;
    if (editor.value) {
        editor.value
            .chain()
            .focus()
            .toggleLink({ href: link, class: 'vwLink' })
            .run();
    }
    closeModal();
};


// ADD IMAGE
const addImage = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    closeModal();
    if (file) {
        // File selected, process it as a base64 image
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target?.result as string;

            if (!editor.value) {
                console.log("❌ Editor not initialized");
                return;
            }

            editor.value.chain().focus().setImage({ src: base64Image }).run();
        };

        reader.onerror = () => {
            prompt("❌ FileReader Error");
        };

        reader.readAsDataURL(file);
        return;
    }

    const url = imageUrl.value.trim();
    if (url) {
        if (!editor.value) {
            console.log("❌ Editor not initialized");
            return;
        }

        editor.value.chain().focus().setImage({ src: url }).run();
    } else {
        console.log("❌ No file or URL provided");
    }


};

// YOUTUBE
const generateEmbedUrlNew = ref<{ src: string } | null>(null);
const addYouTube = () => {
    const url = generateEmbedUrlNew.value ? generateEmbedUrlNew.value.src : '';
    if (editor.value && url) {
        editor.value.chain().focus().setYoutubeVideo({ src: url }).run();
    }
    closeModal();
};







const imageSrc = ref<string | null>(null);
const fileNameRef = ref<HTMLElement | null>(null);

const handleImageUpload = (event: Event) => {
    const input = event.target as HTMLInputElement | null;
    if (input?.files?.length) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            imageSrc.value = reader.result as string;
        };

        reader.readAsDataURL(file);

        if (fileNameRef.value) {
            fileNameRef.value.textContent = file.name;
        }
    }
};

const updateImagePreview = () => {
    imageSrc.value = imageUrl.value;
};




const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:[^\/\n\s]+\/\S+|(?:v|e(?:mbed)?)\/))([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
};

const generateEmbedUrl = (url: string): string => {
    const videoId = getYouTubeId(url);
    if (!videoId) return '';

    const queryParams = url.split('?')[1] || '';

    return `https://www.youtube.com/embed/${videoId}?${queryParams}&autoplay=1`;
};



const addTable = ref<HTMLElement | null>(null);





const pressed1 = ref<(HTMLElement | null)>(null);
const pressed2 = ref<(HTMLElement | null)>(null);
const pressed3 = ref<(HTMLElement | null)>(null);


const toggleFullscreen = () => {
    const container = document.querySelector('.visual-weaver') as HTMLElement;

    if (container) {
        container.classList.toggle('visual-weaver-fullscreen');
        pressed1.value?.classList.toggle("pressed");

        if (container.classList.contains('visual-weaver-fullscreen')) {
            document.addEventListener('keydown', exitFullscreenOnEsc);
        } else {
            document.removeEventListener('keydown', exitFullscreenOnEsc);
        }
    }
};

const exitFullscreenOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        const container = document.querySelector('.visual-weaver') as HTMLElement;

        if (container && container.classList.contains('visual-weaver-fullscreen')) {
            container.classList.remove('visual-weaver-fullscreen');
            document.removeEventListener('keydown', exitFullscreenOnEsc);
        }
    }
};












onMounted(() => {
    tooltips();
    resizer();
    document.addEventListener('click', closeOnOutsideClick);


    const colorBox = fontColorModal.value?.querySelectorAll<HTMLElement>(".color-box");
    colorBox?.forEach(color => {
        color.addEventListener("click", () => {
            editor.value?.chain().focus().setColor(color.style.backgroundColor).run();
        })
    })

    // FOR FURTHER DEVELOPMENT (BETA)
    const colorBox2 = backgroundColorModal.value?.querySelectorAll<HTMLElement>(".color-box");
    colorBox2?.forEach(color => {
        color.addEventListener("click", () => {
            editor.value?.chain()
                .focus()
                .setNode('paragraph', { backgroundColor: 'red' })
                .run();
        });
    });


    const tableAdd = addTable.value?.querySelector("button[type=button]");
    tableAdd?.addEventListener("click", () => {
        const rowCols = addTable.value?.querySelectorAll("input[type=number]");
        if (rowCols && rowCols.length >= 2) {
            const row = Number((rowCols[0] as HTMLInputElement).value);
            const col = Number((rowCols[1] as HTMLInputElement).value);

            // Ensure the values are numbers and not NaN
            if (!isNaN(row) && !isNaN(col)) {
                editor.value?.chain().focus().insertTable({ rows: row, cols: col, withHeaderRow: true }).run();
            } else {
                console.error("Invalid input for rows or columns.");
            }
        } else {
            console.error("Row and column input fields are missing or insufficient.");
        }
    });
});
onUnmounted(() => {
    document.removeEventListener('click', closeOnOutsideClick);
});

const toolbar = {
    "orientation": "horizontal",
    "style": ["bold", "italic", "underline", "clear"],
    "font": ["strikethrough", "superscript", "subscript"],
    "fontsize": ["fontsize"],
    "color": ["color"],
    "para": ["ul", "ol", "paragraph"],
    "mode": ["airmode"],
    "theme": ["secondary"],
    "iconSize": ["fontSize-10px", "fontPadding-8px"],
    "height": ["minimum", "standard", "maximum", "full"]
}



// TOOLTIPS
function tooltips(): void {
    const buttons: NodeListOf<HTMLElement> = document.querySelectorAll("[data-original-title]");

    buttons.forEach((button) => {
        let tooltip: HTMLDivElement | null = null;

        button.addEventListener("mouseenter", (event: MouseEvent) => {
            // Create tooltip
            tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = button.getAttribute("data-original-title") || "";
            button.appendChild(tooltip);

            tooltip.classList.add("show");
        });

        button.addEventListener("mouseleave", () => {
            if (tooltip) {
                tooltip.classList.remove("show");
                setTimeout(() => tooltip?.remove(), 200);  // Ensure tooltip removal after fade-out
            }
        });
    });
}

// RESIZE
function resizer(): void {
    const editor: HTMLElement | null = document.getElementById("editor-body");
    const resizerBeam: HTMLElement | null = document.querySelector(".resizer-editor");

    if (!editor || !resizerBeam) return; // Ensure elements exist

    let isResizing = false;
    let lastY = 0;

    resizerBeam.addEventListener("mousedown", (e: MouseEvent) => {
        isResizing = true;
        lastY = e.clientY;
        document.addEventListener("mousemove", handleResize);
        document.addEventListener("mouseup", stopResize);
    });

    function handleResize(e: MouseEvent): void {
        if (!isResizing || !editor) return;
        const offset = e.clientY - lastY;
        const newHeight = (editor?.offsetHeight || 0) + offset;
        editor.style.height = `${newHeight}px`;
        lastY = e.clientY;
    }


    function stopResize(): void {
        isResizing = false;
        document.removeEventListener("mousemove", handleResize);
        document.removeEventListener("mouseup", stopResize);
    }
}

</script>