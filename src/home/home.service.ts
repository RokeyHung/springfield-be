import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from '../config/config.type';
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class HomeService {
  constructor(private configService: ConfigService<AllConfigType>) {}
  private readonly basePath = join(process.cwd(), 'dist', 'public', 'images');

  appInfo() {
    return { name: this.configService.get('app.name', { infer: true }) };
  }

  getFilePath(fileName: string): string | null {
    const filePath = join(this.basePath, fileName);
    return existsSync(filePath) ? filePath : null;
  }
}
