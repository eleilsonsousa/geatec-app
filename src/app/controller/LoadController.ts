/* import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoadController {

    constructor(private loadingController: LoadingController) { }

    async showLoading(message: string = null, duration: number = null) {
        const loading = await this.loadingController.create(
            { message, duration, translucent: true, cssClass: "load-controller",backdropDismiss: true });
        return await loading.present();
    }

    async hideLoading() {
        this.loadingController.dismiss();
        /*  setTimeout(() => {
            this.loadingController.dismiss();
         }, 500); */




import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Messages } from '../constants/Messages';


@Injectable({
    providedIn: 'root'
})
export class LoadController {

    isLoading = false;

    constructor(public loadingController: LoadingController) { }

    async showLoading() {
        this.isLoading = true;


        return await this.loadingController.create({

            message: Messages.dialogs_loading,
            cssClass: 'load-controller',
            translucent: false,
            showBackdrop: false,
            spinner:"dots",
            keyboardClose: true,
            backdropDismiss: false

        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log('abort presenting'));
                }
            });
        });
    }

    async hideLoading() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }
}