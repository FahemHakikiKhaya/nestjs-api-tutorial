import { Module } from '@nestjs/common';
import { AuthModules } from './auth/app.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModules, UserModule, BookmarkModule],
})
export class AppModule {}
