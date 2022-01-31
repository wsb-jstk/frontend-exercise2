import { TestBed } from '@angular/core/testing';

import { BookResolverResolver } from './book-resolver.resolver';

describe('BookResolverResolver', () => {
  let resolver: BookResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BookResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
