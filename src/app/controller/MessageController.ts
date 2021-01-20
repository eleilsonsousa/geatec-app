
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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
          header: 'Confirmação!',
          message: message,
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                result = false;
              }
            }, {
              text: 'Sim',
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
