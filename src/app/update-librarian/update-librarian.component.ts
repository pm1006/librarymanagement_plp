import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-librarian',
  templateUrl: './update-librarian.component.html',
  styleUrls: ['./update-librarian.component.css']
})
export class UpdateLibrarianComponent implements OnInit {

  constructor(private auth:AuthService) { }
  updateLibrarian(updateLibrarianForm:NgForm){
    this.auth.updateLibrarian(updateLibrarianForm.value).subscribe(data=>{
      console.log(data);
      updateLibrarianForm.reset();
    })
  }
  ngOnInit() {
  }

}
