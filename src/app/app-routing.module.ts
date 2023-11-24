import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { HireComponent } from './hire/hire.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'skill',component:SkillsComponent
  },
  {
    path:'hire', component:HireComponent
  },
  {
    path:'project',component:ProjectComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
