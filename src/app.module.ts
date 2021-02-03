import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistsController } from './playlists/playlists.controller';
import { PlaylistsService } from './playlists/playlists.service';

@Module({
  imports: [],
  controllers: [AppController, PlaylistsController],
  providers: [AppService, PlaylistsService],
})
export class AppModule {}
