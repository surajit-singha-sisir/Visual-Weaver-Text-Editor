<script setup>
import { ref, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

// Initialize the editor
const editor = useEditor({
    content: '<p>Hello, start editing...</p>',
    extensions: [StarterKit],
});

onMounted(() => {
    document.getElementById('bold').addEventListener('click', () => {
        editor.value.chain().focus().toggleBold().run();
    });

    document.getElementById('italic').addEventListener('click', () => {
        editor.value.chain().focus().toggleItalic().run();
    });

    document.getElementById('underline').addEventListener('click', () => {
        editor.value.chain().focus().toggleUnderline().run();
    });

    document.getElementById('erase-style').addEventListener('click', () => {
        editor.value.chain().focus().clearNodes().unsetAllMarks().run();
    });
});
</script>

<template>
    <div>
        <!-- Toolbar -->
        <div class="text-face toolbar">
            <button type="button" class="vwbtn vwbtn-default bold" id="bold">
                <i class="m-bold"></i>
            </button>
            <button type="button" class="vwbtn vwbtn-default italic" id="italic">
                <i class="m-italic"></i>
            </button>
            <button type="button" class="vwbtn vwbtn-default underline" id="underline">
                <i class="m-underline"></i>
            </button>
            <button type="button" class="vwbtn vwbtn-default erase-style" id="erase-style">
                <i class="m-eraser"></i>
            </button>
        </div>

        <!-- TipTap Editor -->
        <editor-content :editor="editor" class="editor" />
    </div>
</template>

<style>
/* Basic styles */
.editor {
    border: 1px solid #ccc;
    min-height: 200px;
    padding: 10px;
}
</style>
