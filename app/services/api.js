// app/services/api.js
import Service from '@ember/service';
import Ember from 'ember';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'my-project/config/environment';

export default class ApiService extends Service {
  @service session;

  async getData(search = '') {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    console.log(config.APP.URIAPI+'api/article/post?search='+search);
    const response = await fetch(config.APP.URIAPI+'api/article/post?search='+search, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  async detailData(id) {
    const token = "1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda";
    const response = await fetch(config.APP.URIAPI+'api/article/post/'+id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
