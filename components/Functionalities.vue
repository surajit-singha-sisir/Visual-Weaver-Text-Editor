<script setup>
import { useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Functionalities from '@/components/Functionalities.vue';

// Initialize the editor in the parent component
const editor = useEditor({
  content: '<p>Hello, start editing...</p>',
  extensions: [StarterKit],
});
</script>
<template></template>