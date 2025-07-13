import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlgoF2lComponent } from './algo-f2l/algo-f2l.component';
import { AlgoPLLComponent } from './algo-pll/algo-pll.component';
import { AlgoOLLComponent } from './algo-oll/algo-oll.component';
import { AlgoPlusComponent } from './algo-plus/algo-plus.component';
import { AlgodebutantComponent } from './algodebutant/algodebutant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AlgoProfilComponent } from './algo-profil/algo-profil.component';
import { ChronometreRubisComponent } from './chronometre-rubis/chronometre-rubis.component';
import { ProfilComponent } from './profil/profil.component';
export const routes: Routes = [
  //  { path: '', component: PrincipalComponent },
  { path: '', component: PrincipalComponent },
  { path: 'AlgoF2l', component: AlgoF2lComponent },
  { path: 'AlgoPLL', component: AlgoPLLComponent },
  { path: 'AlgoOLL', component: AlgoOLLComponent },
  { path: 'AlgoPlus/:id', component: AlgoPlusComponent },
  { path: 'Algodebutant', component: AlgodebutantComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Debutant', component: AlgodebutantComponent },
  { path: 'AlgoProfil', component: AlgoProfilComponent },
  { path: 'Chrono', component: ChronometreRubisComponent },
  { path: 'profil', component: ProfilComponent },
];
