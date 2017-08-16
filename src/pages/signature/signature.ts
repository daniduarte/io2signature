import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { NavController, NavParams } from 'ionic-angular';
// $IMPORTSTATEMENT

/**
 * Generated class for the Signature page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  @ViewChild(SignaturePad) public signaturePad : SignaturePad

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 200,
    'dotSize': 0,
    'throttle': 16
  };
  
  clearSignature() {
    this.signaturePad.clear();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signature');
  }

}
