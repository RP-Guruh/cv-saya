// app/services/api.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class ApiService extends Service {
  @service session;

  async getData() {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    const response = await fetch('http://127.0.0.1:8000/api/article/post', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  async detailData(id) {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    const response = await fetch('http://127.0.0.1:8000/api/article/post/'+id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
