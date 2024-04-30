// import { Test, TestingModule } from '@nestjs/testing';
// import { LinksService } from './links.service';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Link } from '../link.entity';
// import { Repository } from 'typeorm';

// describe('LinksService', () => {
//   let service: LinksService;
//   let mockRepository: MockType<Repository<Link>>;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         LinksService,
//         {
//           provide: getRepositoryToken(Link),
//           useFactory: repositoryMockFactory,
//         },
//       ],
//     }).compile();

//     service = module.get<LinksService>(LinksService);
//     mockRepository = module.get(getRepositoryToken(Link));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should create a link and return it', async () => {
//     const link: Link = new Link();
//     link.originalUrl = 'http://example.com';
//     link.maskedUrl = 'masked-url';
//     link.isValid = true;

//     mockRepository.create.mockReturnValue(link);
//     mockRepository.save.mockResolvedValue(link);

//     const result = await service.createLink('http://example.com');
//     expect(result).toEqual(link);
//     expect(mockRepository.create).toHaveBeenCalledWith({ originalUrl: 'http://example.com', maskedUrl: expect.any(String), isValid: true });
//     expect(mockRepository.save).toHaveBeenCalledWith(link);
//   });

//   // Más pruebas...
// });

// // Helper para crear mocks del repositorio
// export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
//   findOne: jest.fn(),
//   create: jest.fn(),
//   save: jest.fn(),
//   update: jest.fn(),
// }));

// type MockType<T> = {
//   [P in keyof T]: jest.Mock<{}>;
// };
