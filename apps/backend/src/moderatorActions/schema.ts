import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ActionResult {
  static success(messageId: string) {
    return new ActionResult(true, messageId);
  }

  static error(errorMessage?: string) {
    return new ActionResult(false, errorMessage);
  }

  private constructor(
    success: boolean,
    messageId?: string,
    errorMessage?: string,
  ) {
    this.success = success;
    this.messageId = messageId;
    this.errorMessage = errorMessage;
  }

  @Field()
  success: boolean;

  messageId?: string;
  errorMessage?: string;
}
