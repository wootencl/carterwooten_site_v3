import {Component, provide} from '@angular/core';
import {RouteSegment} from '@angular/router';
import {
  async,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

import {Greeter} from '../shared/index';
import {Hello} from './hello.component';

describe('Hello', () => {
  beforeEachProviders(() => [Greeter]);

  it('renders greeting', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(Hello)
      .then((fixture) => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('Hello, Angular2!');
      });
  })));
});
