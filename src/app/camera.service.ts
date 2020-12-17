import { Injectable } from '@angular/core';
import { Camera, CameraResultType, Plugins } from '@capacitor/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
    private storage: AngularFireStorage,

  ) { }

  async takePicture() {
    /*const result = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).catch(err => err);
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    console.log('-->', result, result.webPath);
    if (!result.webPath) {
      // gestion des erreur
    }
    return result.webPath;*/

    const image: any = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    }).catch(err => err);
    console.log('-->', image, image.webPath);

    const imagename = Date.now() + '.' + image.format; //use maybe user ID instead
    console.log('Image : ', imagename, ' => ', image.base64String);
    const upload = this.storage.ref('eventPictures').child(imagename).putString(image.base64String, 'base64', {contentType: 'image/' + image.format});
    console.log('upload => ', upload);
    return imagename;

  }
}
