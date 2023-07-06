import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizService } from './modules/quiz/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

@Module({
  imports: 
          
        [QuizModule, 

          TypeOrmModule.forRoot(typeormConfig),
        ],


  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
