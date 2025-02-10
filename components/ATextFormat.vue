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
    <!-- TEXT FACES -->
    <div class="text-face toolbar">
        <!-- BOLD -->
        <button type="button" class="vwbtn vwbtn-default bold" id="bold" tabindex="-1" aria-label="Bold (CTRL+B)"
            data-original-title="Bold (CTRL+B)"><i class="m-bold"></i></button>
        <!-- ITALIC -->
        <button type="button" class="vwbtn vwbtn-default italic " id="italic" tabindex="-1" aria-label="Italic (CTRL+I)"
            data-original-title="Italic (CTRL+I)"><i class="m-italic"></i></button>
        <!-- UNDERLINE -->
        <button type="button" class="vwbtn vwbtn-default underline" id="underline" tabindex="-1"
            aria-label="Underline (CTRL+U)" data-original-title="Underline (CTRL+U)"><i
                class="m-underline"></i></button>
        <!-- ERASE STYLES -->
        <button type="button" class="vwbtn vwbtn-default erase-style" id="erase-style" tabindex="-1"
            aria-label="Erase Styles (CTRL+/)" data-original-title="Erase Styles (CTRL+/)"><i
                class="m-eraser"></i></button>
    </div>
    
</template>
