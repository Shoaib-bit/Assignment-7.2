import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiveanimals',
  templateUrl: './fiveanimals.component.html',
  styleUrls: ['./fiveanimals.component.css']
})
export class FiveanimalsComponent implements OnInit{
    @Input() data:any;
    ngOnInit(): void {
      console.log(this.data);
    }
    
}
