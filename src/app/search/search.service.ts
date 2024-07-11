import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchState = signal('');

  public search(search: string) {
    this.searchState.set(search);
  }
}
