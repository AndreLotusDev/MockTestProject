import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchState = signal('aaaa');

  public search(search: string) {
    this.searchState.set(search);
  }
}
