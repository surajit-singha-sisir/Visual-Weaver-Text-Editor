<template>
    <main>
        <h1 style="text-align: center;">VISUAL WEAVER</h1>
        <!-- VISUAL WEAVER EDITOR -->
        <textarea name="visual-weaver" class="hide" id="visual-weaver" aria-label="Visual Weaver">


    </textarea>

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
                    <button :class="{ 'pressed': editor?.isActive('bold') }" type="button"
                        class="vwbtn vwbtn-default italic " id="italic" tabindex="-1" aria-label="Italic (CTRL+I)"
                        data-original-title="Italic (CTRL+I)" @click="italic"><i class="m-italic"></i></button>
                    <!-- UNDERLINE -->
                    <button :class="{ 'pressed': editor?.isActive('underline') }" type="button"
                        class="vwbtn vwbtn-default underline" id="underline" tabindex="-1"
                        aria-label="Underline (CTRL+U)" data-original-title="Underline (CTRL+U)" @click="underline"><i
                            class="m-underline"></i></button>
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
                    <button type="button" class="vwbtn vwbtn-default left-align" id="left-align" tabindex="-1"
                        aria-label="Left-align (CTRL+L)" data-original-title="Left-align (CTRL+L)"><i
                            class="m-m-text-left"></i></button>
                    <!-- CENTER ALIGNMENT -->
                    <button type="button" class="vwbtn vwbtn-default center-align" id="center-align" tabindex="-1"
                        aria-label="Center-align (CTRL+E)" data-original-title="Center-align (CTRL+E)"><i
                            class="m-m-text-center"></i></button>
                    <!-- RIGHT ALIGNMENT -->
                    <button type="button" class="vwbtn vwbtn-default right-align" id="right-align" tabindex="-1"
                        aria-label="Right-align (CTRL+R)" data-original-title="Right-align (CTRL+R)"><i
                            class="m-m-text-right"></i></button>
                    <!-- JUSTIFY ALIGNMENT -->
                    <button type="button" class="vwbtn vwbtn-default justify-align" id="justify-align" tabindex="-1"
                        aria-label="Justify-align (CTRL+J)" data-original-title="Justify-align (CTRL+J)"><i
                            class="m-align-justify" style="font-size: 1.2rem;"></i></button>
                    <!-- INDENT -->
                    <button type="button" class="vwbtn vwbtn-default indent" id="indent" tabindex="-1"
                        aria-label="Indent (CTRL+[)" data-original-title="Indent (CTRL+[)"><i
                            class="m-indent-increase"></i></button>
                    <!-- OUTDENT -->
                    <button type="button" class="vwbtn vwbtn-default outdent" id="outdent" tabindex="-1"
                        aria-label="Outdent (CTRL+])" data-original-title="Outdent (CTRL+])"><i
                            class="m-indent-decrease"></i></button>
                </div>


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
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import FontFamily from '@tiptap/extension-font-family';

const editor = useEditor({
    content: '<p>Hello, start editing...</p>',
    extensions: [
        StarterKit,
        Underline,
        TextStyle,
        Highlight,
        FontFamily,
    ],
});





// TEXT RESIZER AND FAMILY

const selectedFontSize = ref("default"); // or any valid default size
const selectedFontFamily = ref("default"); // Default font family



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
                setTimeout(() => tooltip?.remove(), 200);
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