import { Component , OnInit} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  constructor(
    public navCtrl:NavController,
    private navParams:NavParams,
    private alertCtrl: AlertController,
    private QuotesService: QuotesService ) {
  }

  quoteGroup:{category:string, quotes:Quote[], icon:string};

  // ionViewDidLoad() {
  //   this.quoteCollection = this.navParams.data;
  // }
  ngOnInit()
  {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote:Quote)
  {
    const alert=this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you Sure',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes,go ahead',
          handler: () => {
            this.QuotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text:'Nope',
          role: 'cancel',
          handler: () =>{
            console.log('cancelled');
          }
        }
      ]
    });


    alert.present();
  }



}
