import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Github, Globe } from 'lucide-angular/src/icons';

@NgModule({
  imports: [LucideAngularModule.pick({ Globe, Github })],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
