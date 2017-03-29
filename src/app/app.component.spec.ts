import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoDataService } from './to-do-data.service';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        Ng2Webstorage
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TodoDataService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
