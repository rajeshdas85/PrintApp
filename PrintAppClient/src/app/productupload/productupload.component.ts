import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
const URL = 'http://localhost:4000/api/';
@Component({
  selector: 'app-productupload',
  templateUrl: './productupload.component.html',
  styleUrls: ['./productupload.component.css']
})
export class ProductuploadComponent  {
  //  public uploader:FileUploader = new FileUploader({url: URL});
  // public hasBaseDropZoneOver:boolean = false;
  // public hasAnotherDropZoneOver:boolean = false;
 
  // public fileOverBase(e:any):void {
  //   this.hasBaseDropZoneOver = e;
  // }
 
  // public fileOverAnother(e:any):void {
  //   this.hasAnotherDropZoneOver = e;
  // }
constructor(private http: HttpClient){

}
 @ViewChild('fileInput') fileInput;
  
 addFile(): void {
 debugger;
 let fi = this.fileInput.nativeElement;

 if (fi.files && fi.files[0]) {
 // let imgURL = 'src/app/assets/images/';
 
 let fileToUpload = fi.files[0];
 // tslint:disable-next-line:no-unused-expression
 let localpath = "http://localhost:2000/api/Upload/";
 this.http.post(localpath, fileToUpload)
 .subscribe(res => {
 console.log(res);
 });
 }
 }

}
