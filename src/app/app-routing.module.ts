import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDesignComponent } from './shared/components/layout-design/layout-design.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AboutComponent } from './views/pages/about/about.component';
import { HomeComponent } from './views/pages/home/home.component';
import { PortfolioComponent } from './views/pages/portfolio/portfolio.component';
import { ResumeComponent } from './views/pages/resume/resume.component';
import { ContactformComponent } from './views/pages/contactform/contactform.component';

const routes: Routes = [ 
  {path:'', component: LayoutDesignComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', title:"Home", component:HomeComponent },
    {path:'about', title:"About", component:AboutComponent },
    {path:'portfolio', title:"Portfolio", component:PortfolioComponent },
   
   
  ]},
  {path:'contact', title:"Contact", component:ContactformComponent},
  {path:'resume', title:"Resume", component:ResumeComponent},
  {path:'**', title:"Not Found 404", component:NotFoundComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
