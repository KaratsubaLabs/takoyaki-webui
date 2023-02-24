import axios from 'axios'
import { API_URL } from '/src/config'

const withAccessToken = () => ({
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('authToken')
  }
})

class VPSService {
  async info() {
    return axios.get(API_URL + "/vps", withAccessToken());
  }

  async create(display_name, hostname, username, password, ssh_key, ram, cpu, disk, os, message) {
    let body = {display_name: display_name, hostname: hostname, username: username, password: password, ssh_key: ssh_key, ram: ram, cpu: cpu, disk: disk, os: os, message: message}
    return axios.post(API_URL + "/vps", body, withAccessToken());
  }

  async delete(vps_id) {
    let body = {vps_id: vps_id}
    return axios.delete(API_URL + "/vps", body, withAccessToken());
  }

  async start(vps_id) {
    let body = {action_type: 'start', vps_id: vps_id}
    return axios.post(API_URL + "/vps/action", body, withAccessToken());
  }

  async stop(vps_id) {
    let body = {action_type: 'stop', vps_id: vps_id}
    return axios.post(API_URL + "/vps/action", body, withAccessToken());
  }

  async snapshot(vps_id) {
    let body = {action_type: 'snapshot', vps_id: vps_id}
    return axios.post(API_URL + "/vps/action", body, withAccessToken());
  }
}

export default new VPSService();
