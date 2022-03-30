import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Describable } from './games-entities/describable';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GamesRepositoryService {

    constructor(private db: AngularFirestore) {
    }

    public async getUnusedDescribables(): Promise<Describable[]> {
        const describables = this.db.collection<Describable>('Describables',
                ref => ref.where('used', '==', false));

        return await describables.valueChanges({idField: 'id'})
            .pipe(take(1))
            .toPromise();
    }

    public addDescribeable(value: Describable): void {
        const describables = this.db.collection<Describable>('Describables');

        describables.add(value);
    }

    public async markDescribeableAsUsed(id: string): Promise<void> {
        await this.db.doc(`/Describables/${id}`).update({
            used: true
        });
    }

    public async removeAllDescribables(): Promise<void> {
        const describables = this.db.collection<Describable>('Describables');

        const list = await describables.get().toPromise();

        list.forEach(item => item.ref.delete());
    }
}
