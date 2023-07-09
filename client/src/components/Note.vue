<script setup>
import { useNoteStore } from "../stores/note";
import { onMounted } from "vue";
import { Icon } from '@iconify/vue';
const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getAllNotes();
});

const toggleTask = async (id) => {
  let data = {
    done: true,
  };
  await noteStore.updateNote(id);
};

const handleDelete = async (id) => {
  await noteStore.deleteNote(id)

}
</script>

<template>
  <div class="note" v-for="row in noteStore.notes" :key="row._id">
    <div v-if="row.isCompleted === true" class="isCompleted" draggable="true">
      <input
        type="checkbox"
        @change="toggleTask(row._id)"
        v-model="row.isCompleted"
      />
      <h1>{{ row.title }}</h1>
      <p>{{ row.content }}</p>
      <button @click="handleDelete(row._id)"><Icon icon="material-symbols:delete" width="25"/></button>
    </div>
    <div v-else draggable="true">
      <input
        type="checkbox"
        @change="toggleTask(row._id)"
        v-model="row.isCompleted"
      />
      <h1>{{ row.title }}</h1>
      <p>{{ row.content }}</p>
      <button @click="handleDelete(row._id)"><Icon icon="material-symbols:delete" width="25"/></button>
    </div>
  </div>
</template>
<style scoped>
.note {
  background: #fff;
  width: 240px;
  border-radius: 7px;
  box-shadow: 0 2px 5px rgb(175, 175, 175);
  padding: 10px;
  margin: 16px;
  float: left;
  margin-right: 0;
}

.note h1 {
  font-size: 1.25rem;
  margin-bottom: 6px;
  font-weight: 500;
}

.note p {
  font-size: 1rem;
  margin-bottom: 10px;
  word-spacing: pre-wrap;
  word-wrap: break-word;
}

.note button {
  position: relative;
  float: right;
  color: red;
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
}

.note .isCompleted p {
  text-decoration: line-through;
}
</style>
