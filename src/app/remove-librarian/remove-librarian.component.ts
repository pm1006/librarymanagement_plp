import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-librarian',
  templateUrl: './remove-librarian.component.html',
  styleUrls: ['./remove-librarian.component.css']
})
export class RemoveLibrarianComponent implements OnInit {

  constructor(private auth:AuthService) { }
  delete(deleteLibrarianForm:NgForm){
    this.auth.deleteLibrarian(deleteLibrarianForm.value).subscribe(data=>{
      console.log(data);
      deleteLibrarianForm.reset();
    })
  }
  ngOnInit() {
  }

}
