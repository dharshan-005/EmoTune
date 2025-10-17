import axios from 'axios';  

const API_BASE_URL = 'http://localhost:5000';

export const getEmotions = async () => {
    const response = await axios.get(`${API_BASE_URL}/emotions`);
    return response.data;
}

export const createEmotion = async (emotion) => {
    const response = await axios.post(`${API_BASE_URL}/emotions`, emotion);
    return response.data;
}

export const updateEmotion = async (id, emotion) => {
    const response = await axios.put(`${API_BASE_URL}/emotions/${id}`, emotion);
    return response.data;
}

export const deleteEmotion = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/emotions/${id}`);
    return response.data;
}

// Songs

export const getSongs = async () => {
  const response = await axios.get(`${API_BASE_URL}/songs`);
  return response.data;
}

export const createSong = async (songData) => {
  const response = await axios.post(`${API_BASE_URL}/songs`, songData);
  return response.data;
}

export const updateSong = async (id, songData) => {
  const response = await axios.put(`${API_BASE_URL}/songs/${id}`, songData);
  return response.data;
}

export const deleteSong = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/songs/${id}`);
  return response.data;
}