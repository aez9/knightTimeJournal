import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JournalhomeComponent } from './components/journalhome/journalhome.component';

import { MatButtonModule  }    from '@angular/material/button';
import { MatSliderModule  }    from '@angular/material/slider';
import { MatCardModule    }      from   '@angular/material/card';
import { ColorPickerModule }  from 'ngx-color-picker';
import { FormsModule }        from '@angular/forms';

import { ActiveEntryComponent } from './components/active-entry/active-entry.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    JournalhomeComponent,
    ActiveEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    ColorPickerModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
