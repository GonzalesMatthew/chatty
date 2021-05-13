import firebaseConfig from '../apiKeys';
import axios from 'axios';

const dbUrl = firebaseConfig.databaseURL

const getChannels = () => new Promise((resolve, reject) => {
  axios
    .get(`${databaseURL}/channels.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createChannel = (channel) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/channels.json`, channel)
    .then(() => resolve(getChannels()))
    .catch((error) => reject(error));
});

const deleteChannel = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/channels/${firebaseKey}.json`)
    .then(() => resolve(getChannels))
    .catch((error) => reject(error));
});

export { getChannels, createChannel, deleteChannel };
