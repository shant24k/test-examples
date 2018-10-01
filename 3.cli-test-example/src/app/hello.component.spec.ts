import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: HelloComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloComponent, TestComponent ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fixture.detectChanges();
  });

  it('shows the name given by parameter', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(component.name).toBe('world');
    expect(h1.textContent).toBe('Hello world!');
  });
});

@Component({
  template: `<hello [name]="name"></hello>`
})
class TestComponent {
  name = 'world'
}