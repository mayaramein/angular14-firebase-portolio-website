import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ResumeComponent } from './views/pages/resume/resume.component';
import { SharedModule } from './shared/shared/shared.module';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './views/pages/portfolio/portfolio.component';
import { ContactformComponent } from './views/pages/contactform/contactform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    AngularTypewriterEffectModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAe_ByoiQFdDrVASwI1BEt-qPl5E0AXokU",
      authDomain: "mayaramein-portfolio.firebaseapp.com",
      projectId: "mayaramein-portfolio",
      storageBucket: "mayaramein-portfolio.appspot.com",
      messagingSenderId: "891216333732",
      appId: "1:891216333732:web:c56cbb9040c353b7c28f31"
    })),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
