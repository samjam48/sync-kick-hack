const axios = require('axios');
// const baseUrl = 'http://1ceeb79f.ngrok.io';

const getAlldata = () => {
  return axios
    .get(`/get-transcriptedaudio`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getById = id => {
  return axios
    .get(`/get-transcriptedaudio/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export default {
  getAlldata,
  getById
};
