<template>
  <div class="container">
    <div class="header">
      <img :src="require('@/assets/images/logo.png')" alt="Secret Santa" class="logo" />
      <h1>Gift Exchange</h1>
    </div>
    <div class="form-container">
      <form @submit.prevent="uploadFiles" class="upload-form">
        <div class="form-group">
          <label for="employees">Upload Employee List (CSV)</label>
          <input
            id="employees"
            type="file"
            accept=".csv"
            ref="employeesInput"
            @change="handleFileUpload($event, 'employees')"
          />
        </div>
        <div class="form-group">
          <label for="previous">Upload Previous Assignments (CSV)</label>
          <input
            id="previous"
            type="file"
            accept=".csv"
            ref="previousInput"
            @change="handleFileUpload($event, 'previous')"
          />
        </div>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
      <a v-if="downloadUrl" :href="downloadUrl" download="secret_santa_result.csv" class="download-link"> <span>&#8592;&#8594;</span> Download CSV <span>&#8592;&#8594;</span></a>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import './SecretSanta.css'; // Import the CSS file

export default {
  data() {
    return {
      employees: null,
      previous: null,
      downloadUrl: null,
      errorMessage: null,
    };
  },
  methods: {
    handleFileUpload(event, type) {
      if (event.target.files.length > 0) {
        this[type] = event.target.files[0];
      }
    },
    async uploadFiles() {

      if (!this.employees || !this.previous) {
        this.errorMessage = "Both files are required.";
        return;
      }
      if (this.employees.type !== 'text/csv' || this.previous.type !== 'text/csv') {
        this.errorMessage = 'Please select valid CSV files.';
        return;
      }

      const formData = new FormData();
      formData.append('employees', this.employees);
      formData.append('previous', this.previous);

      try {
        const response = await axios.post('http://localhost:3000/api/secret-santa', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          responseType: 'blob'
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        this.downloadUrl = url;

        // Clear the input fields
        this.employees = null;
        this.previous = null;
        this.$refs.employeesInput.value = '';
        this.$refs.previousInput.value = '';

      } catch (error) {
        this.errorMessage = error.response?.data || error.message || "An unexpected error occurred.";
      }
    },
  },
};
</script>
