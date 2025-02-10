<template>
    <h1 style="text-align: center;">VISUAL WEAVER</h1>
    <!-- VISUAL WEAVER EDITOR -->
    <textarea name="visual-weaver" class="hide" id="visual-weaver" aria-label="Visual Weaver">


    </textarea>

    <aside class="visual-weaver">


        <!-- TOOLS -->
        <div class="editor-head" id="editor-head" target-mode="default" target-theme="default">

            <ATextFormat />
            <BRichFormat />
            <CParagraphStyles />
            <DTextColors />
            <EOrderList />
            <FTableMaker />
            <GMediaLoader />
            <HAccessibilities />

        </div>
        <EditorBody />
    </aside>


    <Modals />
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
</style>

<script setup>

</script>



<!-- <script setup lang="ts">
import { onMounted } from 'vue';




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

onMounted(() => {
    tooltips();
    resizer();
});
</script> -->