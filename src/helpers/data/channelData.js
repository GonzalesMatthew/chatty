import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/channels.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createChannel = (channel) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/channels.json`, channel)
    .then((response) => {
      axios
        .patch(`${dbUrl}/channels/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => resolve(getChannels()));
    })
    .catch((error) => reject(error));
});

const deleteChannel = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/channels/${firebaseKey}.json`)
    .then(() => getChannels().then((channelArr) => {
      if (channelArr.length) {
        resolve(channelArr);
      } else {
        resolve([]);
      }
    }))
    .catch((error) => reject(error));
});

const getSingleChannel = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/channels/${firebaseKey}.json`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve({});
      }
    })
    .catch((error) => reject(error));
});

const updateChannel = (firebaseKey, channelObj) => new Promise((resolve, reject) => {
  axios
    .put(`${dbUrl}/channels/${firebaseKey}.json`, channelObj)
    .then(() => getChannels().then((channelArr) => {
      if (channelArr.length) {
        resolve(channelArr);
      } else {
        resolve([]);
      }
    }))
    .catch((error) => reject(error));
});

export {
  getChannels, getSingleChannel,
  createChannel, updateChannel,
  deleteChannel
};
