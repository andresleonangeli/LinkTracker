import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { Link } from '../link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Link])], // Importa aquí el repositorio de Link
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
