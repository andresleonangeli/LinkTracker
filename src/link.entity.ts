// src/links/link.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string;

  @Column()
  maskedUrl: string;

  @Column({ default: true })
  isValid: boolean;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  expirationDate: Date;

  @Column({ default: 0 })
  redirectCount: number;

}
