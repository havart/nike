import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatRippleModule } from '@angular/material/core';

const app = initializeApp(environment.firebase);

export const AUTH_APP = new InjectionToken('Firebase auth', {
  providedIn: 'root',
  factory: () => {
    const auth = getAuth();
    if (environment.useEmulators) {
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      });
    }
    return auth;
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase))
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(MatSnackBarModule),
  ],
};
