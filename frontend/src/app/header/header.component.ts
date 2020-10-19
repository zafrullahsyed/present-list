import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../user-related/login/login.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {

     this.dialog.open(LoginComponent)


  }

  openRegistrationDialog() {

  }
}
