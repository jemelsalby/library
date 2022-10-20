import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  author=""
  language=""
  pubyear=""

  readValue=()=>{
    let data={
      "name":this.name,
      "author":this.author,
      "langauge":this.language,
      "pubyear":this.pubyear
    }
    console.log(data)
    this.myapi.addBooks(data).subscribe(
      (response)=>{
        console.log("tests")
      }
    )
    alert("Successfully added")
    this.name=""
    this.author=""
    this.language=""
    this.pubyear=""
  }

  ngOnInit(): void {
  }

}
