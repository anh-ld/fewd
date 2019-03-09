import * as React from "react";
import { SkeletonPage, Card, SkeletonBodyText, TextContainer, Layout, SkeletonDisplayText } from '@shopify/polaris';

class PageSkeleton extends React.Component<{}, {}> {
  render() {
    return (
      <SkeletonPage  primaryAction fullWidth={true} breadcrumbs={false} secondaryActions={0}>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <SkeletonBodyText />
            </Card>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText />
              </TextContainer>
            </Card>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText />
              </TextContainer>
            </Card>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    );
  }
}

export default PageSkeleton;