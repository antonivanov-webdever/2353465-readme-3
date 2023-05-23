import {Module} from '@nestjs/common';
import {MailerModule} from "./mailer/mailer.module";
import {UserNotificationModule} from "./user-notification/user-notification.module";

@Module({
  imports: [MailerModule, UserNotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
