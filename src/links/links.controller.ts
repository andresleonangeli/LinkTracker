import { Controller, Get, Post, Put, Param, Body, Query, HttpCode, NotFoundException } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) { }

  @Post()
  async createLink(@Body() createLinkDto: { url: string, expirationDate?: string, password?: string }) {
    const link = await this.linksService.createLink(createLinkDto.url, new Date(createLinkDto.expirationDate), createLinkDto.password);
    return { originalUrl: link.originalUrl, maskedUrl: link.maskedUrl };
  }


  @Get('/:maskedUrl')
  async redirectLink(@Param('maskedUrl') maskedUrl: string, @Query('password') password: string): Promise<{ url: string; statusCode: number }> {
    const url = await this.linksService.redirectLink(maskedUrl, password);
    if (!url) {
      throw new NotFoundException('Link not found or invalid.');
    }
    return { url: url, statusCode: 302 };
  }


  @Get('/:id/stats')
  async getStatistics(@Param('id') id: number) {
    console.log(`Fetching stats for link ID: ${id}`);
    const stats = await this.linksService.getStatistics(id);
    return stats;
  }


  @Put('/:id/invalidate')
  @HttpCode(204) // No content
  async invalidateLink(@Param('id') id: number) {
    try {
      await this.linksService.invalidateLink(id);
    } catch (error) {
      throw new NotFoundException('Link not found.');
    }
  }
}
