<template>
  <section>
    <!-- Modal overlay that closes the modal when clicked -->
    <div v-if="isVisible" class="modal-overlay" @click="closeModal"></div>

    <!-- Modal 1: Anchor Link -->
    <div v-if="activeModal === 'modal1'" class="modal" id="modal1">
      <div class="f f-just-between pad-b--10">
        <h2>Insert Link</h2>
        <span class="close-btn" @click="closeModal()"><i class="m-cross1"></i></span>
      </div>
      <div class="border-bottom"></div>
      <!-- Main content of modal 1 -->
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
    </div>

    <!-- Modal 2: Image Insert -->
    <div v-if="activeModal === 'modal2'" class="modal" id="modal2">
      <div class="f f-just-between pad-b--10">
        <h2>Insert Image</h2>
        <span class="close-btn" @click="closeModal()"><i class="m-cross1"></i></span>
      </div>
      <div class="border-bottom"></div>
      <!-- Main content of modal 2 -->
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

    <!-- Modal 3: YouTube Insert -->
    <div v-if="activeModal === 'modal3'" class="modal" id="modal3">
      <div class="f f-just-between pad-b--10">
        <h2>Insert Youtube Video</h2>
        <span class="close-btn" @click="closeModal()"><i class="m-cross1"></i></span>
      </div>
      <div class="border-bottom"></div>
      <!-- Main content of modal 3 -->
      <div class="modal-main-contents">
        <div class="f f-col w-100 f-just-start gap-10">
          <div class="text-input" id="text-input">
            <label for="text">URL Link</label>
            <input type="text" class="inputbox">
          </div>
          <span class="Gray"><u>Note:</u> Youtube Link Like <b class="Red">sa</b><br> You can find this link
            within the video share button</span>
        </div>
        <button class="btn btn-alert w--60">Add</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Modal visibility state
const isVisible = ref(false);

// State to track the active modal (1, 2, or 3)
const activeModal = ref<string | null>(null);

// Open the modal by setting the active modal
const openModal = (modal: string) => {
  isVisible.value = true;
  activeModal.value = modal;
};

// Close the modal by resetting the state
const closeModal = () => {
  isVisible.value = false;
  activeModal.value = null;
};

// Expose methods if needed for external controls
defineExpose({
  openModal,
  closeModal
});
</script>
