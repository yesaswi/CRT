import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  settings = {
    columns: {
      _id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      }
    }
  };
  studentsList = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
      this.apiService.get().subscribe((data: any[]) => {
        console.log(data);
        this.studentsList = data;
      });
    }
}
