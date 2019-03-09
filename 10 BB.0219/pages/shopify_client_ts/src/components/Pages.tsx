import * as React from "react";
import { Page, DataTable, Card, Button } from '@shopify/polaris';
import { Link } from 'react-router-dom';
import PageSkeleton from './PageSkeleton';
import convertTimeString from '../utils/convertTimeString';
import axios from 'axios';

interface Props {
  history: any,
  pages: {id: number, title: string, updated_at: string }[],
  handleChangePages: (pages: {id: number, title: string, updated_at: string }[]) => void
}

class Pages extends React.Component<Props, {}> {
  private redirectToNew = () => {
    const { history }: any = this.props;
    history.push('/new');
  }

  private handleDelete = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:3000/api/pages/${id}`);
    const pagesForNow = await axios.get('http://localhost:3000/api/pages');
    this.props.handleChangePages(pagesForNow.data.pages);
  }

  render() {
    const { pages } = this.props;
    if (pages === undefined) {
      return <PageSkeleton />
    }
    // console.log(pages);
    const displayPageData: Array<any> = pages.map(page => {
      return [
        <Link to={`/edit/${page.id}`}>{page.title}</Link>,
        convertTimeString(page.updated_at),
        <Button destructive size='slim' onClick={() => this.handleDelete(page.id)}>Delete</Button>
      ]
    });

    return (
      <Page
        fullWidth
        title="Pages"
        primaryAction={{content: 'Add new page', onAction: this.redirectToNew}}
      >
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
            ]}
            headings={[
              'Title',
              'Last Modified',
              'Action',
            ]}
            rows={displayPageData}
            footerContent={`You have ${displayPageData.length} page(s).`}
          />
        </Card>
      </Page>
    );
  }
}

export default Pages;