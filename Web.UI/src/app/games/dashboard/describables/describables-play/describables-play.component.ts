import { Component, OnInit } from '@angular/core';
import { GamesRepositoryService } from '../../../games-repository.service';
import { RandomPickerService } from '../../../random-picker.service';

@Component({
    selector: 'app-describables-play',
    templateUrl: './describables-play.component.html',
    styleUrls: ['./describables-play.component.scss']
})
export class DescribablesPlayComponent {

    public describableValue: string;

    constructor(private repo: GamesRepositoryService, private rndPicker: RandomPickerService) {
    }

    public async getDescribeable(): Promise<void> {
        const unusedDescribables = await this.repo.getUnusedDescribables();

        const describeable = this.rndPicker.getRandomItemFrom(unusedDescribables);

        await this.repo.markDescribeableAsUsed(describeable.id);

        this.describableValue = describeable.value;
    }
}
