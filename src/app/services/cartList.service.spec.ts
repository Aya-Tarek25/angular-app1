/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartListService } from './cartList.service';

describe('Service: CartList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartListService]
    });
  });

  it('should ...', inject([CartListService], (service: CartListService) => {
    expect(service).toBeTruthy();
  }));
});
