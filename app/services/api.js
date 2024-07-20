// app/services/api.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ApiService extends Service {
  @service session;

  async getData(search = '') {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    const response = await fetch('https://6101-202-43-168-208.ngrok-free.app/api/article/post?search='+search, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  async detailData(id) {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    const response = await fetch('https://6101-202-43-168-208.ngrok-free.app/api/article/post/'+id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
