import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTextService } from './answer-text.service';

describe('AnswerTextService', () => {
  let service: AnswerTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerTextService],
    }).compile();

    service = module.get<AnswerTextService>(AnswerTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
