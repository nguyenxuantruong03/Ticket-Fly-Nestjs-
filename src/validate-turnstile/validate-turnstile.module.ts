// src/app.module.ts
import { Module } from '@nestjs/common';
import { ValidateTurnstileService } from './validate-turnstile.service';

@Module({
  providers: [ValidateTurnstileService],
  exports: [ValidateTurnstileService],
})
export class ValidateTurnstileModule {}
