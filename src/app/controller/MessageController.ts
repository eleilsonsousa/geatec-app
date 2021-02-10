
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Messages } from '../constants/Messages';

@Injectable({
    providedIn: 'root'
})
export class MessageController {


    constructor(public alertController: AlertController,
        public toastController: ToastController) {
    }

    async showMessage(title: string, message: string) {
        const alert = await this.alertController.create({
            header: title,
            subHeader: '',
            message: message,
            buttons: ['OK'],
        });

        await alert.present();
        let result = await alert.onDidDismiss();
        console.log(result);
    }

    async showMessageToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            cssClass: 'toast-message'
        });
        toast.present();
    }

    async showMessageConfirm(message: string) {
        let result = false;
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: Messages.dialogs_confimation_title,
          message: message,
          buttons: [
            {
              text: Messages.dialogs_confimation_no,
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                result = false;
              }
            }, {
              text: Messages.dialogs_confimation_yes,
              handler: () => {
                result = true;
              }
            }
          ]
        });
    
       await alert.present();
       await alert.onDidDismiss();  
       return result;
      }
    
}
