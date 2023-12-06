import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SampleService } from 'src/app/sample.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit,OnDestroy {
  productForm1!:FormGroup;
  productForm2!:FormGroup;
  productForm3!:FormGroup;

  //---------
  queryParam:any;
  categories:string[] = ["Electronics","Grocery","Furniture","Clothing","Beauty"]
  status:string[] = ["In stock","Low stock","Out of stock"]

  constructor(private fb:FormBuilder, private router:Router,private route:ActivatedRoute, private http:SampleService){}
  selectedId!:any;
  viewProduct!:any;
  isEditable!:any;
  backButton!:any;
  ngOnInit() {
    this.createForm();
        //-------------
        this.queryParam = this.http.queryParam;
        console.log(this.queryParam);
    // this.selectedId = this.route.snapshot.queryParamMap.get('id');
    this.selectedId = this.queryParam.id;
    console.log("received Id ",this.selectedId )

    this.isEditable = this.route.snapshot.queryParamMap.get('temp');
    console.log(this.isEditable)
    this.viewProduct = this.route.snapshot.queryParamMap.get('productName');
    console.log(this.viewProduct)
    this.backButton = this.route.snapshot.queryParamMap.get('flag');
    console.log(this.backButton);
    if(this.selectedId){
      this.editProductDetails();
    }else if(this.isEditable){
      this.ViewProductDetails();
      // this.productForm2.get('gender')?.disable();
      // this.productForm1.get('category')?.disable();
      // this.productForm1.get('status')?.disable();
    }


  }

  ngOnDestroy(){
this.viewProduct = false;
this.isEditable = false;
this.backButton = false;
  }

  createForm(){
    this.productForm1 = this.fb.group({
      "productName" : ['',Validators.required],
      "description" : ['',Validators.required],
      "category" : ['',Validators.required],  //dropdown
      "brand" : ['',Validators.required],
      "status" : ['',Validators.required],  //dropdown
      "sizes" : ['',Validators.required],
      "colors" : ['',Validators.required],
      "tags" : ['',Validators.required],
      "productImage" : [""]
    })

    this.productForm2 = this.fb.group({
      "productCode" : ['',Validators.required],
      "product_SKU" : ['',Validators.required],
      "gender" : ['',Validators.required],
      "qunatity" : ['',Validators.required]
    })

    this.productForm3 = this.fb.group({
      "regularPrice" : ['',Validators.required],
      "salePrice" : ['']
    })
  }

  get productName(){
    return this.productForm1.get('productName');
  }


  createProduct(){
    console.log(this.productForm1.value)
    console.log(this.productForm2.value)
    console.log(this.productForm3.value)
    if(this.selectedId == null){
      this.onSubmit();
    }else if(this.viewProduct && this.selectedId){
      this.ViewProductDetails();

    }else{
      this.updateSelectedProduct();
    }
  }

  onSubmit(){
    let productDetails = {
      ...this.productForm1.value,
      ...this.productForm2.value,
      ...this.productForm3.value,
      featured : this.isChecked
    };

    this.http.saveDataToServer('products',productDetails).subscribe((res:any)=>{
      this.router.navigate(['/product'])
    })
  }




ImageBase64String: any = '';

onSelect(event: any) {
  if (event.target.files.length === 0) {
    alert("No file selected!");
    return;
  }

  const file: File = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (onLoadEvent: any) => {
    const binaryString: string = onLoadEvent.target.result;
    this.ImageBase64String = binaryString;
    console.log('ImageBase64String', this.ImageBase64String);

    // Send the binary string to the server using an HTTP request
    this.http.saveDataToServer('products', this.ImageBase64String).subscribe((res: any) => {
      console.log(res);
    });
  };

  reader.onerror = (onErrorEvent: any) => {
    reader.abort();
  };

  reader.readAsDataURL(file);
}



  isChecked!:boolean;
  buttonState(state:any){
    this.isChecked = state.isTrusted;
    console.log(this.isChecked)
  }




  editProductDetails(){
    const endPoint = "products/" + this.selectedId
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{
      console.log(response)
      this.productForm1.patchValue(response)
      this.productForm2.patchValue(response)
      // this.productForm3.patchValue(response)
      this.productForm3.patchValue({
        regularPrice: response.regularPrice,
        salePrice: response.salePrice,
        feature : response.feature
      });
      this.isChecked = response.featured;

    });
  }

  ViewProductDetails(){
    const endPoint = "products/" + this.selectedId
    this.http.getDataFromServer(endPoint).subscribe((response:any)=>{

      console.log(response)
      this.productForm1.patchValue(response)
      this.productForm2.patchValue(response)

      this.productForm3.patchValue({
        regularPrice: response.regularPrice,
        salePrice: response.salePrice,
        feature : response.feature
      });

      this.isChecked = response.featured;

    });
  }

  updateSelectedProduct(){
    const endPoint = 'products/' + this.selectedId;
    const productForm = {
      ...this.productForm1.value,
      ...this.productForm2.value,
      ...this.productForm3.value,
      featured : this.isChecked
    }
    this.http.updateDataToServer(endPoint,productForm).subscribe((response:any)=>{
      console.log("edited data send ", response);
      this.router.navigate(['/product'])
    })
  }


}


// -----------------------

// files: File[] = [];
// selectedImage: string | ArrayBuffer | null = null;

// onSelect(event: any) {
//   this.files = Array.from(event.target.files);

//   if (this.files.length > 0) {
//     const reader = new FileReader();

//     reader.onload = (e: any) => {
//       const base64Image = e.target.result;
//       this.selectedImage = base64Image;
//       this.uploadImages(base64Image);
//     };

//     reader.readAsDataURL(this.files[0]);
//   } else {
//     this.selectedImage = null;
//   }
// }

// uploadImages(base64Image: string) {
//   if (this.files.length === 0) {
//     alert("No files selected");
//     return;
//   }

//   const jsonData = {
//     id: 1,
//     name: "Product 1",
//     image: base64Image,
//   };
//   this.http.saveDataToServer('products',jsonData).subscribe((res:any)=>{
//     console.log(res)
//   })

// }
// ==========================


// image upload
// // -----------------------------
// //   files:File[] = [];
// //   selectedImage:string | ArrayBuffer | null = null;

// //   onSelect(event:any){
// // this.files = Array.from(event.target.files)

// // if(this.files.length > 0){
// //   const reader = new FileReader();

// //   reader.onload = (e:any)=>{
// //     this.selectedImage = e.target.result;

// //     this.uploadImages();
// //   };
// //   reader.readAsDataURL(this.files[0]);
// // }else{
// //   this.selectedImage = null;
// // }
// //   }
// //   uploadImages(){
// //     if(this.files.length === 0){
// //       alert("No files Selected")
// //       return;
// //     }
// //     const formData = new FormData();
// //     this.files.forEach((file:File)=>{
// //       formData.append('images',file);
// //       console.log(file)
// //     })
// //   }
// ========================================
// ImageBase64String:any = '';

// onSelect(event:any){
// if(event.target.files.length === 0){
//   alert("No file selected!")
//   return;
// }
// const file: File = event.target.files[0];
// const reader = new FileReader();
// reader.readAsDataURL(file);

// reader.onload = (onLoadEvent : any)=>{
//   this.ImageBase64String = onLoadEvent.target.result;
//   console.log('ImageBase64String',this.ImageBase64String)
//   // this.productForm1.controls['productImage'].setValue(this.ImageBase64String);

//   this.http.saveDataToServer('products',this.ImageBase64String).subscribe((res:any)=>{
//         console.log(res)
//       })

// };
// reader.onerror = (onErrorEvent:any)=>{
//   reader.abort();
// }
// }
