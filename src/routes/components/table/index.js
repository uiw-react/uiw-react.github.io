import { Table, Notify, Button, Checkbox, Pagination, Loader } from 'uiw';
import Markdown from '@/components/Markdown';


export default class Page extends Markdown {
  path = 'src/table/README.md';
  dependencies = { Table, Notify, Button, Checkbox, Pagination, Loader };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-table/README.md');
    return md.default || md;
  }
}
