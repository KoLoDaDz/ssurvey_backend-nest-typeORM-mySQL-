import { Test, TestingModule } from '@nestjs/testing';
import { AnswerMultiService } from './answer-multi.service';

describe('AnswerMultiService', () => {
  let service: AnswerMultiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerMultiService],
    }).compile();

    service = module.get<AnswerMultiService>(AnswerMultiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
