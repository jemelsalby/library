import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  bookName=""
  authorName=""
  publishYear=""

  readvalues=()=>{
    let data={
      "bookName":this.bookName,
      "authorName":this.authorName,
      "publishYear":this.publishYear,
     
    }
    console.log(data)
    this.myapi.addBook(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )


  }
  ngOnInit(): void {
  }

}
