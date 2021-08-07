import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  initForm: FormGroup = this.fb.group({
    pathName:[null,Validators.required],
    today: [null,Validators.required],
    total: [null,Validators.required],
    death: [null,Validators.required],
    totalDeath: [null,Validators.required],
    v1: [null,Validators.required],
    v2: [null,Validators.required],
    vaccination: [null,Validators.required],
  });
  constructor(private fb: FormBuilder,   private firestore: AngularFirestore,) {}

  ngOnInit(): void {}

  publishData(){
    const formData=this.initForm.value
    const {today,total,death,totalDeath,v1,v2,vaccination,pathName}=formData
    const data={
     today,
     total,
     death,
     totalDeath,
     injection:{
       v1,v2
     },
     updateTime:new Date(),
     date:new Date(),
     vaccination
    }
    console.log(data)
    this.firestore.collection('today').doc(pathName).set(data).then(e=>{
      console.log(e)
      console.log('okok')
      this.initForm.reset()
    })
  
  }
}
