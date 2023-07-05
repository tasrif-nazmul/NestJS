import { Controller, Get} from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController  //declare this controller in module file
{

    constructor(private quizService: QuizService) {}

    @Get('/')         
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }
}
