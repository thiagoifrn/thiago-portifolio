import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ArrowRight } from 'lucide-angular/src/icons';

const icons = {
  ArrowRight,
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
