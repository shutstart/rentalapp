import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL : Observable<string>;

  isHovering: boolean;
  constructor(private storage: AngularFireStorage,private toastr:ToastrService,public db: AngularFirestore,public rental: RentalService) { }
 url = ''
  ngOnInit() {
    
  }
  toggleHover(event: boolean){
    this.isHovering = event;
  }
  startUpload(event: FileList){
    const file = event.item(0);
    if(file.type.split('/')[0] !== 'image'){
      this.toastr.error("Unsupported File type","Error:")
      return;
    }
    let time = new Date().getTime()
    const path = `propertyimages/${time}_${file.name}`;
    const customMetadata = {app: 'Rental App'};
    this.task = this.storage.upload(path,file,{ customMetadata });
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap=>{
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.rental.url = path;
          this.db.collection('photos').add( { path, size: snap.totalBytes })
          this.toastr.success("File uploaded Successfully!")
        }
      })
    );
  }
isActive(snapshot){
  return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes; 
}

}
