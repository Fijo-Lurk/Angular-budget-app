import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.models';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
