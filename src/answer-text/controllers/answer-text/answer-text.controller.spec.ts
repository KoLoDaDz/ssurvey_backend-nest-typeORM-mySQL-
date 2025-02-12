import { Test, TestingModule } from '@nestjs/testing';
import { AnswerTextController } from './answer-text.controller';

describe('AnswerTextController', () => {
  let controller: AnswerTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerTextController],
    }).compile();

    controller = module.get<AnswerTextController>(AnswerTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
