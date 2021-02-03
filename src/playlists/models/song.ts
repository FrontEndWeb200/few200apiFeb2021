export class Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export class SongCreate {
  title: string;
  artist: string;
  album?: string;
}