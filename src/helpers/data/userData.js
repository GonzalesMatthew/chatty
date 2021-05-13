import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET USER FOR MESSAGES
const getUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/users/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateUser = (userObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/users/${userObj.firebaseKey}.json`)
    .then(() => resolve(getUser(userObj.firebaseKey)))
    .catch((error) => reject(error));
});

const createUser = (userObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      resolve(updateUser({ firebaseKey: response.data.name }));
    })
    .catch((error) => reject(error));
});

// PASS USER OBJECT FROM AUTH WHEN USER LOGS IN
const userCheckIn = (authUser) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${authUser.uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(updateUser(authUser));
      } else {
        resolve(createUser(authUser));
      }
    })
    .catch((error) => reject(error));
});

export { getUser, userCheckIn };
