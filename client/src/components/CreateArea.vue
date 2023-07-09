<script setup>
import { ref, reactive } from "vue";
import { useNoteStore } from "../stores/note";
import { Icon } from '@iconify/vue';

const noteStore = useNoteStore();

const title = ref("");
const content = ref("");
const isCompleted = ref(false);

const note = reactive({
  title: title,
  content: content,
  isCompleted: isCompleted,
});

const isExpanded = ref(false);

const submitButton = async (e) => {
  try {
    await noteStore.addNote(note)
    e.target.reset()
  } catch (error) {
    
  }
}

</script>

<template>
  <form @submit.prevent="submitButton">
    <input
      type="text"
      v-if="isExpanded"
      v-model="title"
      placeholder="Title"
      name="title"
    />
    <p>
      <textarea
        @click="isExpanded = true"
        v-model="content"
        name="content"
        placeholder="Take a note..."
        rows="{{isExpanded?3:1}}"
      >
      </textarea>
    </p>
    <button><Icon icon="ic:baseline-plus" width="25"/></button>
  </form>
</template>

<style scoped>
form {
  position: relative;
  width: 600px;
  margin: 32px auto 50px auto;
  background: #fff;
  padding: 7px;
  border-radius: 7px;
  box-shadow: 0 1px 7px rgb(128, 128, 128);
}

form input {
  width: 100%;
  border: none;
  padding: 4px 10px;
  margin-bottom: 20px;
  outline: none;
  font-size: 1rem;
  resize: none;
}

form textarea {
  width: 100%;
  border: none;
  padding: 4px 10px;
  margin-bottom: 20px;
  outline: none;
  font-size: 1rem;
  resize: none;
}

form button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 80px;
  bottom: -18px;
  background: rgb(255, 200, 18);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 1px 3px rgb(165, 165, 165);
}
</style>
