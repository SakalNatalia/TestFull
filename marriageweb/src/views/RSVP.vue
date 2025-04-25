<template>
 <section class="rsvp-banner align-items-center justify-content-center text-white position-relative">
    <div class="overlay"></div>
    <h1 class="rsvp-title">RSVP</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
  <div class="container mt-4">
    <form @submit.prevent="submitForm">
  <div class="row">
    <div class="col-md-6">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">*Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          required
        />
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email">*Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          required
        />
      </div>

      <!-- Attendance Options -->
      <div class="form-group">
        <label>*I will attend to</label>
        <div class="attendance-options">
          <div
            :class="['option', { selected: attending === 'Wedding Day' }]"
            @click="attending = 'Wedding Day'"
          >
            Wedding Day
          </div>
          <div
            :class="['option', { selected: attending === 'Ceremony Day' }]"
            @click="attending = 'Ceremony Day'"
          >
            Ceremony Day
          </div>
          <div
            :class="['option', { selected: attending === 'The Party' }]"
            @click="attending = 'The Party'"
          >
            The Party
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column for Message -->
    <div class="col-md-6">
      <!-- Message Field -->
      <div class="form-group">
        <label for="message" class="col-form-label">Leave your message</label>
        <textarea
          v-model="message"
          id="message"
          class="form-control"
          rows="4"
        ></textarea>
      </div>
    </div>
  </div>

  <!-- Submit Button -->
  <button class="btn custom-btn1 mt-3" type="submit">Submit</button>
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