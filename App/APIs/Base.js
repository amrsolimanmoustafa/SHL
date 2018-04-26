
export default class Base {
                 constructor() {

                 }
                 baseUrl = 'www.shl-app.com/api/';
                 icon_url='http://www.shl-app.com/';
                 lang = "1";
                 baseUrlWithLang() {
                   return baseUrl + lang + "/";
                 }
                 setLang(ln) {
                   lang = ln;
                   console.log("lang is st to : " + lang);
                 }
               }
