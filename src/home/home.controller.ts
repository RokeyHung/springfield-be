import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Response,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { HomeService } from './home.service';

@ApiTags('Home')
@Controller()
export class HomeController {
  constructor(private service: HomeService) {}

  @Get()
  appInfo() {
    return this.service.appInfo();
  }

  @Get(':path')
  serveFile(@Param('path') path, @Response() res) {
    const filePath = this.service.getFilePath(path);

    if (!filePath) {
      throw new NotFoundException('File not found');
    }

    return res.sendFile(filePath);
  }
}
