<template>
    <section class="relative">
        <editor-content :editor="editor" class="editor" />
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

// Initialize the editor
const editor = useEditor({
    content: '<p>Hello, start editing...</p>',
    extensions: [StarterKit],
});
</script>



<style lang="scss">
.ProseMirror {
    height: 50vh;


    &:focus-visible {
        outline: none;
    }
}
</style>