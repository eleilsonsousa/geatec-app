import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuItem } from 'primeng/api';
import { Messages } from './constants/Messages';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    items: MenuItem[];

    public appPages = [
        {
            title: Messages.app_component_menu_dashboard,
            url: '/menu-list',
            icon: 'bar-chart'
        },
        {
            title: Messages.app_component_menu_cadastro,
            url: '/menu-list',
            icon: 'create'
        },
        
        {
            title: Messages.app_component_menu_ordem_servico, 
            url: '/ordem-servico-list',
            icon: "document-attach"
        },  
    
        {
            title: Messages.app_component_menu_configuracoes, 
            url: '/menu-list',
            icon: "settings"
        },  

    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }

    }
}