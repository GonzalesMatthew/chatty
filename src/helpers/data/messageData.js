import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getChannelMessages = (channelId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/messages.json?orderBy="channelId"&equalTo="${channelId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// MAKE SURE TO INCLUDE FIREBASE KEY IN MESSAGE OBJECT
const updateMessage = (messageObj, channelId) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/messages/${messageObj.firebaseKey}.json`, messageObj)
    .then(() => resolve(getChannelMessages(channelId)))
    .catch((error) => reject(error));
});

const createMessage = (messageObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/messages.json`, messageObj)
    .then((response) => {
      resolve(updateMessage({ firebaseKey: response.data.name }, messageObj.channelId));
    })
    .catch((error) => reject(error));
});

const deleteMessage = (firebaseKey, channelId) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/messages/${firebaseKey}.json`)
    .then(() => resolve(getChannelMessages(channelId)))
    .catch((error) => reject(error));
});

export { getChannelMessages, createMessage, deleteMessage };
