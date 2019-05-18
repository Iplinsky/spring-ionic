import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({   // Component indica que é um Controlador
  selector: 'page-home',
  templateUrl: 'home.html'   // Referência para qual arquivo HTML está sendo controlado
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }
}
