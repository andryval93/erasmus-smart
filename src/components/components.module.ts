import { NgModule } from '@angular/core';
import { HeaderEsComponent } from './header-es/header-es';
import { FooterEsComponent } from './footer-es/footer-es';
@NgModule({
	declarations: [HeaderEsComponent,
    FooterEsComponent],
	imports: [],
	exports: [HeaderEsComponent,
    FooterEsComponent]
})
export class ComponentsModule {}
