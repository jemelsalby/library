import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myapi:ApiService) {}

  bookName=""
   readvalues=()=>{
    let data={
      "bookName":this.bookName
    }
    console.log(data)
    this.myapi.searchBook(data).subscribe(
      (res)=>{
        this.viewdata=res

      }
    )
   }
   
 updateBook=()=>{
  this.myapi.updateBook(this.viewdata[0]).subscribe(
    (res)=>{
      alert("updated")
    }
  )
 }

   viewdata:any=[
]
    

  ngOnInit(): void {
  }
}
