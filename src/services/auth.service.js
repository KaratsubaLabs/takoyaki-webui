import axios from 'axios'
import { API_URL } from '/src/config'

class AuthService {
	login(email, password) {
		let body = {email: email, password: password}
		return axios.post(API_URL + "/login", body).then(resp => {
			if (resp.data.token != null) {
				localStorage.setItem('authToken', resp.data.token);
			}
			return resp;
		})
	}

	register(email, password) {
		let body = {email: email, password: password}
		return axios.post(API_URL + "/register", body).then(resp => {
			if (resp.data.token != null) {
				localStorage.setItem('authToken', resp.data.token);
			}
			return resp;
		})
	}

	logout() {
		localStorage.removeItem('authToken');
	}
}

export default new AuthService();
