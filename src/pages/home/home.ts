import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({   // Component indica que é um Controlador
  selector: 'page-home',
  templateUrl: 'home.html'   // Referência para qual arquivo HTML está sendo controlado
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  // Método que habilita / desabilita o deslizar do menu
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }
}
