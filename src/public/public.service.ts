import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class PublicService {
  private readonly basePath = join(process.cwd(), 'dist', 'public', 'images');

  getFilePath(fileName: string): string | null {
    const filePath = join(this.basePath, fileName);
    return existsSync(filePath) ? filePath : null;
  }
}
