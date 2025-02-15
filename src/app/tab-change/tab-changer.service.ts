import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabChangerService {
  public tabChange = new Subject<boolean>();
}
