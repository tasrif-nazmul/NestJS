import { Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController  //declare this controller in module file
{
    constructor(private quizService: QuizService){}

    @Get('/')         
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }


    @Post('/regestration')
    @UsePipes(ValidationPipe)
    regestration(@Body() quizData: createQuizDto){
        return {data: quizData};
    }
}
