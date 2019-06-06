import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
    constructor(
        private http: HttpClient
        ){
        this.http = http;
    }

    get(url,accessToken = null){

        // if (accessToken) {
        //     return this.http.get(url, {headers: new HttpHeaders(
        //       {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + accessToken,
        //         'Accept': '*/*',
        //       })
        //   })
        // }
        return this.http.get(url)
    }

    post(url : string, data,isAuthorized = false){
        return this.http.post(url,data)    
    }

    put(url : string, data){
      return this.http.put(url,data)
    }

    delete(url : string,isAuthorized = false){
        return this.http.delete(url)
    }

    
}