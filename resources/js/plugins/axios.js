import axios from 'axios'
import swal from 'sweetalert'
import { appUrl } from '../config'

const token = document.head.querySelector('meta[name="csrf-token"]')

const axiosInstance = axios.create({
  baseURL: appUrl,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

if (token) {
  axiosInstance.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

// Response interceptor
axiosInstance.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    swal('Opss...', 'Algo deu errado, por favor tente novamente mais tarde!', 'error')
  }

  return Promise.reject(error)
})

export default axiosInstance
