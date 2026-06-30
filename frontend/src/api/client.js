import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Ajoute automatiquement le token JWT s'il existe (après login)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ---- Produits ----
export const getProducts = (filters = {}) =>
  apiClient.get('/products', { params: filters }).then((res) => res.data)

export const getProductById = (id) =>
  apiClient.get(`/products/${id}`).then((res) => res.data)

// ---- Chatbot ----
export const sendChatMessage = (message, conversationHistory = []) =>
  apiClient
    .post('/chat', { message, history: conversationHistory })
    .then((res) => res.data)

// ---- Auth ----
export const loginUser = (email, password) =>
  apiClient.post('/auth/login', { email, password }).then((res) => res.data)

export const registerUser = (data) =>
  apiClient.post('/auth/register', data).then((res) => res.data)

export default apiClient