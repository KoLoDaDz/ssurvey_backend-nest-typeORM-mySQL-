import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/Users';
import { UsersModule } from './users/users.module';
import { answerone } from './typeorm/entities/AnswersOneOption';
import { answermulti } from './typeorm/entities/AnswersMultiOption';
import { answertext } from './typeorm/entities/AnswerText';
import { answers } from './typeorm/entities/Answers';
import { options } from './typeorm/entities/Options';
import { survey } from './typeorm/entities/Survey';
import { question_type } from './typeorm/entities/Type';
import { TypesModule } from './types/types.module';
import { SurveyModule } from './survey/survey.module';
import { OptionsModule } from './options/options.module';
import { AnswerModule } from './answer/answer.module';
import { AnswerMultiModule } from './answer-multi/answer-multi.module';
import { AnswerTextModule } from './answer-text/answer-text.module';
import { AnswerOneModule } from './answer-one/answer-one.module';

async function initializeDatabase() {
  const connection = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345',
  });

  const databaseName = 'testdb';
  const queryRunner = connection.createQueryRunner();

  // Перевірка наявності бази даних
  const databaseExists = await queryRunner.query(
    `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${databaseName}'`,
  );

  if (!databaseExists.length) {
    // Створення бази даних, якщо вона не існує
    await queryRunner.query(`CREATE DATABASE ${databaseName}`);
    console.log(`База даних ${databaseName} створена.`);
  }

  await queryRunner.release();
  await connection.close();
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        await initializeDatabase();

        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '12345',
          database: 'testdb',
          entities: [User, answerone, answermulti, answertext, answers, options, survey, question_type],
          synchronize: true,
        };
      },
    }),
    UsersModule,
    TypesModule,
    SurveyModule,
    OptionsModule,
    AnswerModule,
    AnswerMultiModule,
    AnswerTextModule,
    AnswerOneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}