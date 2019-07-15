import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 11, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 12, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 13, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 14, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 15, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 16, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 17, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 18, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 19, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 20, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 21, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 22, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 23, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 24, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 25, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 26, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 27, title: 'My blog post', url: 'https://placeimg.com/640/480/any' },
      { id: 28, title: 'My blog post', url: 'https://placeimg.com/640/480/any' }

    ];
    return {posts};
  }
}
