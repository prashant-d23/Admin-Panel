import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { MAT_DIALOG_DATA,MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  form!: FormGroup;
  isUpdate:boolean=false;
  selectedId:string|null=null;
  constructor(private formBuilder: FormBuilder, private http:HttpService, private router:Router,private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.queryParamMap.get('id');
    console.log("received Id ",this.selectedId )
    if(this.selectedId){
      this.editCategoryDetails()
    }
        // console.log("data ",this. data)
    this.addCategoryForm();
  }
  addCategoryForm(){
    this.form = this.formBuilder.group({
      "category" : ['', Validators.required],
      "description":['',Validators.required]
    });
  }
  submitForm() {
    console.log('Form submitted:', this.form.value);
    this.router.navigate(['/categories'])

   
    this.http.postData('category',this.form.value).subscribe((response:any)=>{
      console.log(response);
    });

    // Add your form submission logic here
  }
  createCategory(){

    if(this.selectedId==null){
      this.submitForm()
    }else{
      this.updateSelectedCategory();
    }
  }

  editCategoryDetails(){
    const endPoint = "category/" + this.selectedId
    this.http.getData(endPoint).subscribe((response:any)=>{
      console.log(response);
      this.form.patchValue(response);
      this.isUpdate=true;
    })
 
  }
  updateSelectedCategory(){
    let endPoint="category/"+ this.selectedId;
    console.log("updated data",this.form.value)
    this.http.editData(endPoint,this.form.value).subscribe((response:any)=>{
      this.router.navigate(['/categories'])
      console.log("updated data",response);
    })
  }
}
