import axios from 'axios';

axios.defaults.baseURL = 'https://647cd15dc0bae2880ad13a57.mockapi.io';

export const getTweets = async page => {
  const params = new URLSearchParams();
  params.append('page', page);
  params.append('limit', 8);
  try {
    const response = await axios.get(`/tweets`, { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeFollowingState = async (id, newState) => {
  try {
    const response = await axios.put(`/tweets/${id}`, newState);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const refreshTweets = async numberOfTweets => {
  const params = new URLSearchParams();
  console.log(numberOfTweets);
  params.append('page', 1);
  params.append('limit', numberOfTweets);
  try {
    const response = await axios.get(`/tweets`, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
