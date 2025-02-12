import { Test, TestingModule } from '@nestjs/testing';
import { AnswerOneController } from './answer-one.controller';

describe('AnswerOneController', () => {
  let controller: AnswerOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerOneController],
    }).compile();

    controller = module.get<AnswerOneController>(AnswerOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
