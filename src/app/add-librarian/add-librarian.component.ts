import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-librarian',
  templateUrl: './add-librarian.component.html',
  styleUrls: ['./add-librarian.component.css']
})
export class AddLibrarianComponent implements OnInit {

  constructor(private auth:AuthService) { }
  addLibrarian(addLibrarianForm:NgForm){
this.auth.addLibrarian(addLibrarianForm.value).subscribe(data=>{
  console.log(data);
  addLibrarianForm.reset();
});
  }
  ngOnInit() {
  }

}
