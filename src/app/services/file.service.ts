import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileUpload } from '../models/fileUpload';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  addFile(file: any): Observable<Object> {
    return this.http.post(environment.BACKEND_HOST + 'file', file, {
      responseType: 'json',
    });
  }
}
