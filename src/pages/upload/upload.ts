import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { BeerComponent } from '../../components/beer/beer';
import { PostComponent } from '../../components/post/post';
import { UserComponent } from '../../components/user/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Camera } from 'ionic-native';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  beerName: string;
  beerLink: string;
  beerAbv: number;
  beerRate: number;
  beerPrice: number;
  beerDesc: string;

	picData: any;
	picUrl: any;
	myPicRef: any;
	uploaded: boolean = false;

  uploadedBeer = {};
  loggedUser = {};

  constructor(private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
  	public loadingCtrl: LoadingController) {

  	this.myPicRef=firebase.storage().ref('/beer/');
  }

  takePic() {

  	Camera.getPicture({
  		quality:100,
  		allowEdit: true,
  		targetWidth: 1080,
  		targetHeight: 1080,
  		destinationType:Camera.DestinationType.DATA_URL,
  		sourceType:Camera.PictureSourceType.CAMERA,
  		encodingType:Camera.EncodingType.PNG,
  		saveToPhotoAlbum:true//True = Save to phone gallery
  	}).then(imagedata=>{
  		this.picData=imagedata;
  		this.uploaded = true;
  		this.showAlert("Good job!", "Your photo is ready to upload!");
  	})
  }

  upload(){

    //==== Loading ====
  	let loading = this.loadingCtrl.create({content: 'Posting...'});
	  loading.present();

    //==== DatePicker ====
    var now = new Date().toString();
    now = now.replace(/\s+/g, '-');

    //BeerLink is the BeerName without white spaces
    this.beerLink = this.beerName.replace(/\s+/g, '');

    //This will get the logged user
    this.fireAuth.authState.take(1).subscribe(auth => {

      //This will create the folder and upload the photo
      this.myPicRef.child(this.beerLink).child(auth.uid+'-'+now+'.png')
      .putString(this.picData, 'base64', {contentType:'image/png'})
      .then(savepic=>{

        //Beer photo url
        this.picUrl=savepic.downloadURL;

        //Creating a new beer with the user input information
        this.fireDatabase.object('beer/'+this.beerLink).update(
          new BeerComponent(this.beerName, this.picUrl, this.beerAbv, this.beerRate, this.beerPrice));

        //Here is where our beer is saved ========
        const beerRef: firebase.database.Reference = firebase.database().ref('/beer/'+this.beerLink);
        beerRef.on('value', beerSnapshot =>{
          this.uploadedBeer = beerSnapshot.val; //UploadedBeer is now an object with the database information
        })
        //========================================
        //Here is where our user is saved ========
        const userRef: firebase.database.Reference = firebase.database().ref('/profile/'+auth.uid);
        userRef.on('value', userSnapshot =>{
          this.loggedUser = userSnapshot.val; //loggedUser is now an object with the database information
        })
        //========================================
        //Here is where our posts are saved ======== Just used to get the posts count number
        var postsFolder = {};
        const postsRef: firebase.database.Reference = firebase.database().ref('/posts/');
        postsRef.on('value', postsSnapshot =>{
          postsFolder = postsSnapshot.val; 
        })
        //========================================

        //Creating a new post with the current user, the created beer, pic and desc
        var num = Object.keys(postsFolder).length+1;
        this.fireDatabase.object('posts/'+num).set(
          new PostComponent(
            auth.uid,
            this.picUrl,
            this.beerDesc
            )
        );

        loading.dismiss();

        this.showAlert("Awesome!", "Your post is now posted!");
      })
      .catch(e =>{
        loading.dismiss();
        this.showAlert("I'm sorry :(", "Some error occurred");
        console.log("Some error occurred here rsrs:");
        console.error(e);
      })

    })
  }

  showAlert(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      //buttons: ['OK']
    });
    alert.present();
  }

}
