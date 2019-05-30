import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    StrikethroughDirective,
    GoalDetailsComponent,
    DateCountPipe,
    GoalFormComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
