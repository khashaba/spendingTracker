import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit {
  @Input() items;
  @Output() selectedItems = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  getItems(category) {
    this.selectedItems.emit(category.id);
  }
}
