import { Test, TestingModule } from '@nestjs/testing';
import { AnswerOneService } from './answer-one.service';

describe('AnswerOneService', () => {
  let service: AnswerOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerOneService],
    }).compile();

    service = module.get<AnswerOneService>(AnswerOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
