import { Icon, Avatar, Badge } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path = 'src/avatar/README.md';
  dependencies = { Icon, Avatar, Badge };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-avatar/README.md');
    return md.default || md;
  }
}
