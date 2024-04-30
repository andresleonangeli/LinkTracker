import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from '../link.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private linksRepository: Repository<Link>,
  ) { }

  async createLink(originalUrl: string, expirationDate?: Date, password?: string): Promise<Link> {
    const maskedUrl = this.generateMaskedUrl();
    const link = this.linksRepository.create({
      originalUrl,
      maskedUrl,
      isValid: true,
      expirationDate,
      password
    });
    await this.linksRepository.save(link);
    return link;
  }


  async redirectLink(maskedUrl: string, password: string): Promise<string> {
    const link = await this.linksRepository.findOne({ where: { maskedUrl } });
    if (!link) {
      throw new Error('Link not found.');
    }
    if (!link.isValid || (link.expirationDate && new Date() > link.expirationDate)) {
      throw new Error('Link not found or no longer valid.');
    }
    if (link.password !== password) {
      throw new Error('Invalid password.');
    }
    link.redirectCount += 1;
    await this.linksRepository.save(link);
    return link.originalUrl;
  }


  async getStatistics(id: number): Promise<any> {
    const link = await this.linksRepository.findOneBy({ id });
    if (!link) {
      throw new Error('Link not found.');
    }
    return { id, originalUrl: link.originalUrl, redirects: link.redirectCount };
  }

  async invalidateLink(id: number): Promise<void> {
    const link = await this.linksRepository.findOneBy({ id });
    if (!link) {
      throw new Error('Link not found.');
    }
    link.isValid = false;
    await this.linksRepository.save(link);
  }


  private generateMaskedUrl(): string {
    return `masked-${Math.random().toString(36).substr(2, 9)}`;
  }
}
