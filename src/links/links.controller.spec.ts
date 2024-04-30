// import { Test, TestingModule } from '@nestjs/testing';
// import { LinksController } from './links.controller';
// import { LinksService } from './links.service';

// describe('LinksController', () => {
//   let controller: LinksController;
//   let service: LinksService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [LinksController],
//       providers: [
//         {
//           provide: LinksService,
//           useValue: {
//             createLink: jest.fn(),
//             redirectLink: jest.fn(),
//             getStatistics: jest.fn(),
//             invalidateLink: jest.fn(),
//           },
//         },
//       ],
//     }).compile();

//     controller = module.get<LinksController>(LinksController);
//     service = module.get<LinksService>(LinksService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('should create a link', async () => {
//     const link = { originalUrl: 'http://example.com', maskedUrl: 'masked-url' };
//     jest.spyOn(service, 'createLink').mockResolvedValue(link);

//     expect(await controller.createLink('http://example.com')).toEqual(link);
//     expect(service.createLink).toHaveBeenCalledWith('http://example.com');
//   });

//   // Más pruebas...
// });
