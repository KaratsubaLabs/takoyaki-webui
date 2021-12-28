import axios from 'axios'
import { API_URL } from '/src/config'

class AuthService {
	login(username, password) {
		let body = {username: username, password: password}
		return axios.post(API_URL + "/login", body).then(resp => {
			if (resp.data.token != null && resp.data.token != undefined) {
				localStorage.setItem('authToken', JSON.stringigy({token: resp.data.token}));
			}
			return resp.data;
		})
	}

	register(username, email, password) {
		let body = {username: username, email: email, password: password}
		return axios.post(API_URL + "/register", body).then(resp => {
			if (resp.data.token != null && resp.data.token != undefined) {
				localStorage.setItem('authToken', JSON.stringify({token: resp.data.token}));
			}
			return resp.data;
		})
	}

	logout() {
		localStorage.removeItem('authToken');
	}
}

export default new AuthService();