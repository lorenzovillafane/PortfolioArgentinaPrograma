import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { LoginComponent } from './components/pages/login/login.component';
const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'about',component:AboutComponent}, 
  {path:'contact',component:ContactComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
