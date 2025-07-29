import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlgoPlusComponent } from './algo-plus/algo-plus.component';

import { AlgodebutantComponent } from './algodebutant/algodebutant.component';
import { AlgoF2lComponent } from './algo-f2l/algo-f2l.component';
import { OllComponent } from './categories/oll/oll.component';
import { PllComponent } from './categories/pll/pll.component';
import { Cube4x4Component } from './categories/cube4x4/cube4x4.component';
import { Cube5x5Component } from './categories/cube5x5/cube5x5.component';
import { Cube6x6Component } from './categories/cube6x6/cube6x6.component';
import { Cube7x7Component } from './categories/cube7x7/cube7x7.component';
import { SkewbComponent } from './categories/skewb/skewb.component';
import { MegaminxComponent } from './categories/megaminx/megaminx.component';
import { PyraminxComponent } from './categories/pyraminx/pyraminx.component';
import { Square1Component } from './categories/square1/square1.component';
import { Cube2x2Component } from './categories/cube2x2/cube2x2.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { AlgoProfilComponent } from './algo-profil/algo-profil.component';
import { ChronometreRubisComponent } from './chronometre-rubis/chronometre-rubis.component';
import { ProfilComponent } from './profil/profil.component';
import { algoOLL } from './constant';

export const routes: Routes = [
  //  { path: '', component: PrincipalComponent },
  { path: '', component: ChronometreRubisComponent },
  { path: 'Algodebutant', component: AlgodebutantComponent },
  { path: 'AlgoF2l', component: AlgoF2lComponent },
  { path: 'AlgoPLL', component: PllComponent },
  { path: 'AlgoOLL', component: OllComponent },

  { path: '2x2', component: Cube2x2Component },
  { path: '4X4', component: Cube4x4Component },
  { path: '5x5', component: Cube5x5Component },
  { path: '6x6', component: Cube6x6Component },
  { path: '7x7', component: Cube7x7Component },
  { path: 'pyraminx', component: PyraminxComponent },
  { path: 'skew', component: SkewbComponent },
  { path: 'megaminx', component: MegaminxComponent },
  { path: 'square', component: Square1Component },

  { path: 'Connexion', component: ConnexionComponent },
  { path: 'AlgoProfil', component: AlgoProfilComponent },
  { path: 'Chrono', component: ChronometreRubisComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'AlgoPlus/:id', component: AlgoPlusComponent },
];
