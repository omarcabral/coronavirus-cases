import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../cases';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor(private api: ApiService) { }
  displayedColumns: string[]=['name', 'age', 'status'];
  data: Cases[]=[];
  isLoadingResults=true;

  ngOnInit(): void {
    this.api.getCases()
      .subscribe((res:any)=>{
        this.data=res;
        console.log(this.data);
        this.isLoadingResults=false;
      }, err=>{
        console.log(err);
        this.isLoadingResults=false;
      });
      
  }
 

}
