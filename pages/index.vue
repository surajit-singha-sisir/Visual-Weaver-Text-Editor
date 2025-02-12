<template>
    <main>
        <h1 style="text-align: center;">VISUAL WEAVER</h1>
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
                    <!-- COLOR PALETTE -->
                    <!-- FONT COLOR -->
                    <button :class="{ 'pressed': editor?.isActive('color') }" type="button"
                        class="vwbtn vwbtn-default fontColor" id="fontColor" tabindex="-1" aria-label="Font Color"
                        data-original-title="Font Color" @click="fontColor"><i class="m-text-color"></i></button>
                    <!-- FONT COLOR -->
                    <button :class="{ 'pressed': editor?.isActive('color') }" type="button"
                        class="vwbtn vwbtn-default backgroundColor" id="backgroundColor" tabindex="-1"
                        aria-label="Background Color" data-original-title="Background Color" @click="backgroundColor"><i
                            class="m-palette"></i></button>


                    <div class="colorModal hidei" ref="colorModal">
                        <button class="w-100 m-b--05" ref="colorBanner"></button>
                        <button v-for="color in colors" class="color-box btn"
                            :style="`background-color: ${color.code} ;`" :aria-label="color.name"
                            :data-original-title="color.name"></button>
                    </div>

                </div>


                <!-- BACKGROUND COLOR PALETTE -->
                <!-- <div class="background-color-palette">
                        <button v-for="color in bgColors" :key="color" :style="{ backgroundColor: color }"
                            @click="setBackgroundColor(color)" class="color-btn"
                            :aria-label="'Background Color: ' + color"></button>
                    </div> -->
            </div>
            <editor-content :editor="editor" class="editor editor-body editor-section" />
        </aside>


        <Modals />
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
import { Color } from '@tiptap/extension-color'

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
    ],
});


// List of colors for font and background
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

const colorModal = ref<HTMLElement | null>(null);
const fontColor = () => {
    colorModal.value?.classList.toggle("hidei");
}
const backgroundColor = () => {
    colorModal.value?.classList.toggle("hidei");
}



// Set font color
const setFontColor = (color: string) => {
    if (editor.value) {
        editor.value.chain().focus().setColor(color).run();
    }
};

// Set background color
const setBackgroundColor = (color: string) => {
    if (editor.value) {
        // editor.value.chain().focus().setBackgroundColor(color).run();
    }
};


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




onMounted(() => {
    tooltips();
    resizer();

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