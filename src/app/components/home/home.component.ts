import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryPath = 'assets/categories.json';
  itemsPath = 'assets/items.json';
  categories;
  items;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJSON(this.categoryPath).subscribe(
      (value) => (this.categories = value)
    );
  }

  getJSON(path: string): Observable<any> {
    return this.http.get(path);
  }
  selectedItems(selectedCategoryId: number) {
    this.getJSON(this.itemsPath).subscribe((items) => {
      for (const item of items) {
        if (item.categoryId === selectedCategoryId) {
          this.items = item.data;
          break;
        }
      }
    });
  }
}
