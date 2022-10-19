import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private httpClient: HttpClient) {}

  upload_Image(file: any) {
    const CLOUDINARY_NAME = 'pvman1811';
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = 'manpv_ph13976';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    // call api upload cloudinary
    const response = this.httpClient.post(CLOUDINARY_API, formData, {
      headers: {
        'Content-Type': 'application/form-data',
      },
    });
    return response;
  }
}
