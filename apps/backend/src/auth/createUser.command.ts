import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import { AuthService } from './service/auth';

@QuestionSet({ name: 'create-user-questions' })
export class CreateUserQuestions {
  @Question({ message: 'Email', name: 'email' })
  parseEmail(val: string) {
    return val;
  }

  @Question({
    message: 'Password',
    name: 'password',
    type: 'password',
    mask: '*',
  })
  parsePassword(val: string) {
    return val;
  }
}

@Command({ name: 'user:create', description: 'create user' })
export class CreateUserCommand extends CommandRunner {
  constructor(
    private readonly auth: AuthService,
    private readonly inquirer: InquirerService,
  ) {
    super();
  }

  async run(): Promise<void> {
    const { email, password } = await this.inquirer.ask<{
      email: string;
      password: string;
    }>('create-user-questions', undefined);

    await this.auth.register(email, password);
  }
}
