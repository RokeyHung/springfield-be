import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Response,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublicService } from './public.service';

@ApiTags('Public')
@Controller({
  path: 'auth',
  version: '1',
})
export class PublicController {
  constructor(private service: PublicService) {}

  @Get(':path')
  serveFile(@Param('path') path, @Response() res) {
    const filePath = this.service.getFilePath(path);

    if (!filePath) {
      throw new NotFoundException('File not found');
    }

    return res.sendFile(filePath);
  }
}
