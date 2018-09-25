import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
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
}
