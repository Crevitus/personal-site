import { Component, OnInit } from '@angular/core';
import { GamesRepositoryService } from '../../../games-repository.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-describables-setup',
    templateUrl: './describables-setup.component.html',
    styleUrls: ['./describables-setup.component.scss']
})
export class DescribablesSetupComponent implements OnInit {

    constructor(private repository: GamesRepositoryService) {
    }

    public describablesForm: FormGroup;

    public ngOnInit(): void {
        this.describablesForm = new FormGroup({
            value: new FormControl(''),
        });
    }

    public onSubmit(): void {
        this.repository.addDescribeable({
            value: this.describablesForm.controls.value.value,
            used: false,
        });
    }

    public async deleteAll(): Promise<void> {
        await this.repository.removeAllDescribables();
    }
}
