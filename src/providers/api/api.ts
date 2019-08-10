import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

interface User{
    username:string,
    email:string,
    password:string,
    mobile:string
}

@Injectable()
export class ApiProvider {

    public APP_TITLE: string = 'Freshisha';
    public BASE_URL: string = 'http://app.freshisha-wesel.de';
    public category: any = [];
    private theme: BehaviorSubject<String>;
    public selectedTheme: string = 'dark-theme';
    public fontSize: number = 20;
    public savedNews: any = [];

    constructor(public http: Http, private storage: Storage) {
        storage.get('settings').then((val) => {
            if (val !== null && val !== undefined) {
                this.fontSize = val.fontSize;
                this.selectedTheme = val.selectedTheme;
            }

            this.theme = new BehaviorSubject(this.selectedTheme);
        }).catch(()=>{
            this.selectedTheme = 'light-theme';
            this.theme = new BehaviorSubject(this.selectedTheme);
        });

        if (this.savedNews.length == 0) {
            this.getSavedNews();
        }
    }

    login(data){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
          headers: headers
        });
       return this.http.post(this.BASE_URL + '/appdb/login.php', data, options)
        .map(res => res.json())
    }

    register(data){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
          headers: headers
        });
       return this.http.post(this.BASE_URL + '/appdb/register.php', data, options)
        .map(res => res.json())
    }
    fetchProfile(data){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({
          headers: headers
        });
       return this.http.post(this.BASE_URL + '/appdb/register.php', data, options)
        .map(res => res.json())
    }

    getData(query: string) {
        return this.http.get(this.BASE_URL + '/api/' + query).map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json();
    }

    postData(data: any = new FormData(), query: string) {
        return this.http.post(this.BASE_URL + '/api/' + query, data).map(this.extractData);
    }

    setActiveTheme(val) {
        this.selectedTheme = val;
        this.theme = new BehaviorSubject(val);
        this.updateSetting();
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }

    updateSetting() {
        this.storage.set('settings', { fontSize: this.fontSize, selectedTheme: this.selectedTheme });
    }

    getSavedNews() {
        this.storage.get('news').then((val) => {
            if (val != null && val != undefined) {
                this.savedNews = val;
            }
        });
    }

    saveNews(news: any) {
        if (news != null && news != undefined) {
            if (this.savedNews[news.id] == null || this.savedNews[news.id] == undefined || !this.savedNews[news.id]) {
                this.savedNews[news.id] = news;
            } else {
                this.savedNews[news.id] = null;
                delete this.savedNews[news.id];
            }

            this.storage.set('news', this.savedNews);
        }
    }

    formatDate(date: string = '2017-11-13 12:38:17') {
        return date.slice(0, 16).replace(' ', 'T');
    }


 isLoggedIn(){
    let status =  localStorage.getItem('status')
    if(status == 'active'){
        return true
    }else{
        return false
    }
}

logout(){
    localStorage.clear()
}
    
}
