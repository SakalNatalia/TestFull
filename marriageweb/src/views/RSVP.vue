<template>
    <div class="container mt-4">
      <h1>RSVP</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="name" type="text" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label>Will you attend?</label>
          <select v-model="attending" class="form-control" required>
            <option value="">Choose one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <button class="btn btn-primary mt-3" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        attending: ''
      };
    },
    methods: {
      submitForm() {
        alert(`Name: ${this.name}\nEmail: ${this.email}\nAttending: ${this.attending}`);
      }
    }
  };
  </script>