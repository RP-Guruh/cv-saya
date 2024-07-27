// app/services/api.js
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'my-project/config/environment';
import toastr from 'toastr';
export default class ApiService extends Service {
  @service session;
   
  async getData(search = '') {
    const token = '1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda';
    console.log(config.APP.URIAPI + 'api/article/post?search=' + search);
    const response = await fetch(
      config.APP.URIAPI + '/api/article/post?search=' + search,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();

    console.log(data);
    
    return data;
  }

  async postData(data) {
    const token = '1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda';
    const response = await fetch(config.APP.URIAPI + '/api/submitform/form/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
  
    if(dataResponse.message == 'success') {
      let title = 'Terimakasih atas pesan kamu '+data.name;
      let message = 'Secepatnya saya akan menghubungi kamu kembali 😊';
     
      toastr.success(message, title, {
        debug: false,
        positionClass: 'toast-top-right',
        onclick: null,
        fadeIn: 300,
        fadeOut: 1000,
        timeOut: 5000,
        extendedTimeOut: 1000
      });
    }
    else {
      let title = 'Oooppss.. maaf terjadi kesalahan 😕';
      let message = dataResponse.message+' silahkan coba kembali';
     
      toastr.error(message, title, {
        debug: false,
        positionClass: 'toast-top-right',
        onclick: null,
        fadeIn: 300,
        fadeOut: 1000,
        timeOut: 5000,
        extendedTimeOut: 1000
      });
    }
    console.log(dataResponse);
    return dataResponse;
  }

  async detailData(id) {
    const token = '1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda';
    const response = await fetch(
      config.APP.URIAPI + '/api/article/post/' + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
}
