import axios from 'axios'
import { API_URL } from '/src/config'

class VPSService {
  info() {
    return axios.post(API_URL + "/vps/info", {}).then(resp => resp.data);
  }

  create(display_name, hostname, username, password, ssh_key, ram, cpu, disk, os, message) {
    let body = {display_name: display_name, hostname: hostname, username: username, password: password, ssh_key: ssh_key, ram: ram, cpu: cpu, disk: disk, os: os, message: message}
    return axios.post(API_URL + "/vps/create", body).then(resp => resp.data);
  }

  delete(vps_id) {
    let body = {vps_id: vps_id}
    return axios.post(API_URL + "/vps/delete", body).then(resp => resp.data);
  }

  start(vps_id) {
    let body = {vps_id: vps_id}
    return axios.post(API_URL + "/vps/start", body).then(resp => resp.data);
  }

  stop(vps_id) {
    let body = {vps_id: vps_id}
    return axios.post(API_URL + "/vps/stop", body).then(resp => resp.data);
  }

  snapshot(vps_id) {
    let body = {vps_id: vps_id}
    return axios.post(API_URL + "/vps/snapshot", body).then(resp => resp.data);
  }
}

export default new VPSService();