
export default class Base {
                 constructor() {

                 }
                 baseUrl = "www.shl-app.com/api/";
                 lang = "1";
                 baseUrlWithLang() {
                   return baseUrl + lang + "/";
                 }
                 setLang(ln) {
                   lang = ln;
                   console.log("lang is st to : " + lang);
                 }
               }
