import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutDesignComponent } from '../components/layout-design/layout-design.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        LayoutDesignComponent,
        SocialMediaComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        LayoutDesignComponent,
        SocialMediaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        
    ]
})
export class SharedModule { }
