import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getSelectedCategoryId(): number | null {
    const storedCategoryId = localStorage.getItem('selectedCategoryId');
    return storedCategoryId !== null ? +storedCategoryId : null;
  }

  getSelectedSubCategoryId(): number | null {
    const storedSubCategoryId = localStorage.getItem('selectedSubCategoryId');
    return storedSubCategoryId !== null ? +storedSubCategoryId : null;
  }
}
