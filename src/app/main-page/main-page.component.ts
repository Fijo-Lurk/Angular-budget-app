import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.models';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItem: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItem.push(newItem);
    this.totalBudget += newItem.amount;
  }
  deleteItem(item: BudgetItem){
    let index = this.budgetItem.indexOf(item);
    this.budgetItem.splice(index, 1);
    this.totalBudget -= item.amount;
  }
  updateItem(updateEvent: UpdateEvent){
    this.budgetItem[this.budgetItem.indexOf(updateEvent.old)] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
