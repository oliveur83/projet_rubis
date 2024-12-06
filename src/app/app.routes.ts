import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlgoF2lComponent } from './algo-f2l/algo-f2l.component';
import { AlgoPLLComponent } from './algo-pll/algo-pll.component';
import { AlgoOLLComponent } from './algo-oll/algo-oll.component';
import { AlgoPlusComponent } from './algo-plus/algo-plus.component';
import { AlgodebutantComponent } from './algodebutant/algodebutant.component';
export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'AlgoF2l', component: AlgoF2lComponent },
  { path: 'AlgoPLL', component: AlgoPLLComponent },
  { path: 'AlgoOLL', component: AlgoOLLComponent },
  { path: 'AlgoPlus/:id', component: AlgoPlusComponent },
  { path: 'Algodebutant', component: AlgodebutantComponent },
];
