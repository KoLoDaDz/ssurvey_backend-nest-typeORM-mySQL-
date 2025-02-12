import { Test, TestingModule } from '@nestjs/testing';
import { AnswerMultiController } from './answer-multi.controller';

describe('AnswerMultiController', () => {
  let controller: AnswerMultiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerMultiController],
    }).compile();

    controller = module.get<AnswerMultiController>(AnswerMultiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
