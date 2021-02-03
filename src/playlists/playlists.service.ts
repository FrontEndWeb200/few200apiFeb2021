import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Song, SongCreate } from './models/song';
import * as cuid from 'cuid';

@Injectable()
export class PlaylistsService {
  private data: Song[] = [
    {
      id: '1',
      title: 'More than This',
      artist: 'Roxy Music',
      album: 'Roxy Music Collection',
    },
    {
      id: '2',
      title: "Ambitions Az A Ridah'",
      artist: '2Pac',
      album: 'All Eyez on Me',
    },
    { id: '3', title: 'The Look of Love', artist: 'Dusty Springfield' },
  ];
  async getAll(): Promise<Song[]> {
    return new Promise((res) => res(this.data));
  }

  async add(song: SongCreate): Promise<Song> {
    const newSong = {
      ...song,
      id: cuid(),
    };
    this.data = [newSong, ...this.data];
    return new Promise((res) => res(newSong));
  }
}
