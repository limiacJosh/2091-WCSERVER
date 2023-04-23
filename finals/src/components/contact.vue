<template>
   <div class="contact-page">
    <h1>Contact Us</h1>
    <p>Have a question, comment, or feedback for us? Fill out the form below and we'll get back to you as soon as possible.</p>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    name: 'contact',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: '',
      email: '',
      message: '',
      };
    },
      methods: {
    submitForm() {
      // Here you can add your logic to send the form data to your server or API
      // For this example, we'll just log the data to the console
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
      // Reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.contact-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact-page h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.contact-page p {
  font-size: 18px;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  font-size: 18px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  height: 150px;
}

button[type="submit"] {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #FDB927;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #FF3D03;
}
  </style>
  