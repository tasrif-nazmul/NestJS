import { Controller, Get} from '@nestjs/common';

@Controller('quiz')
export class QuizController  //declare this controller in module file
{

    @Get('/')         
    getQuiz(){
        return [1,2,3];
    }
}
