import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../services/api'

export const useNoteStore = defineStore('note', () => {
  const notes = reactive([])


  const addNote = async (data) => {
    try {
      console.log(data);
      const res = await apiClient.post('/todo/new', data)
      console.log({ store: res });
      notes.unshift(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getAllNotes = async () => {
    try {
      const { data } = await apiClient.get('/todos');
      console.log(data);
      data.forEach(e => {
        notes.push(e)
      })
    } catch (error) {

    }
  }

  const updateNote = async (id) => {
    try {
      const response = await apiClient.put(`/todo/complete/${id}`)
      console.log(response);
      // find the index of note to be updated and set it as completed or not based on server
      const index = notes.findIndex(note => note._id === id)
      notes[index] = response.data.data
    } catch (error) {
      console.error(error);
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await apiClient.delete(`/todo/delete/${id}`)
      const index = notes.findIndex((note) => note._id === id)
      await notes.splice(index, 1);
    }
    catch (err) {
      console.log(err);
    }
  }

  return {
    notes,
    addNote,
    getAllNotes,
    updateNote,
    deleteNote
  }

})