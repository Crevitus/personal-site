import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesListingComponent } from './dashboard/games-listing/games-listing.component';
import { DescribablesPlayComponent } from './dashboard/describables/describables-play/describables-play.component';
import { DescribablesSetupComponent } from './dashboard/describables/describables-setup/describables-setup.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: GamesListingComponent,
            },
            {
                path: 'describables',
                component: DescribablesPlayComponent,
                data: {
                    title: 'Describables',
                    desc: 'Pick a phrase out the \'hat\'',
                    icon: 'some-icon',
                },
            },
            {
                path: 'describables-setup',
                component: DescribablesSetupComponent,
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
