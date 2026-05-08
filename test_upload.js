const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function testUpload() {
  try {
    const formData = new FormData();
    // Assuming videoplayback.mp4 exists in sample_videos
    formData.append('video', fs.createReadStream('./sample_videos/videoplayback.mp4'));

    console.log('Sending request to Cloud Run...');
    const response = await axios.post('https://authentikit-backend-705987336498.us-central1.run.app/api/verify/analyze', formData, {
      headers: {
        ...formData.getHeaders()
      }
    });

    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    console.log('Data:', response.data);
  } catch (error) {
    if (error.response) {
      console.log('Error Status:', error.response.status);
      console.log('Error Headers:', error.response.headers);
      console.log('Error Data:', error.response.data);
    } else {
      console.log('Error Message:', error.message);
    }
  }
}

testUpload();
