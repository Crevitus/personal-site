import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GamesListingComponent } from './dashboard/games-listing/games-listing.component';
import { DescribablesPlayComponent } from './dashboard/describables/describables-play/describables-play.component';
import { DescribablesSetupComponent } from './dashboard/describables/describables-setup/describables-setup.component';

@NgModule({
    declarations: [DashboardComponent, GamesListingComponent, DescribablesSetupComponent, DescribablesPlayComponent],
    imports: [
        CommonModule,
        GamesRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class GamesModule {
}
