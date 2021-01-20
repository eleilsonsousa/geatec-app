import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class LoadController {

    constructor(private loadingController: LoadingController) { }

    async showLoading(message: string = null, duration: number = null) {
        const loading = await this.loadingController.create({ message, duration });
        return await loading.present();
    }

    async hideLoading() {
        this.loadingController.dismiss();
       /*  setTimeout(() => {
           this.loadingController.dismiss();
        }, 500); */
    }

}