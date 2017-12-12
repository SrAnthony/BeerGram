import { NgModule } from '@angular/core';
import { BeerComponent } from './beer/beer';
import { PostComponent } from './post/post';
import { UserComponent } from './user/user';
@NgModule({
	declarations: [BeerComponent,
    PostComponent,
    UserComponent],
	imports: [],
	exports: [BeerComponent,
    PostComponent,
    UserComponent]
})
export class ComponentsModule {}
