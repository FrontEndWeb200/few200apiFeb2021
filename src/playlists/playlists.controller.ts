import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { Song, SongCreate } from './models/song';
import { PlaylistsService } from './playlists.service';

@Controller('playlists')
export class PlaylistsController {
  constructor(private service: PlaylistsService) {}
  @Get()
  async GetAll() {
    return { data: await this.service.getAll() };
  }

  @Post()
  async addOne(@Body() song: SongCreate) {
      console.log('Got', song);
    if (song.artist.toLowerCase() === 'toad the wet sprocket') {
      await new Promise((_, rej) => {
        setTimeout(() => {
          rej(new HttpException('That band sucks', 400));
        }, 5000);
      });
    } else {
      const response = await this.service.add(song);
        return new Promise((res) => {
            setTimeout(() => res(response), 3000);
      });
    }
  }
}
