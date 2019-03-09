import * as React from "react";
import { Modal, TextContainer } from '@shopify/polaris';

interface Props {
  backToPages: () => void,
  save: () => void,
  showPopUp: boolean,
  togglePopUp: () => void
}

class PopUp extends React.Component<Props, {}> {
  render() {
    const { backToPages, save, showPopUp, togglePopUp } = this.props;
    return (
      <Modal
          open={showPopUp}
          onClose={togglePopUp}
          primaryAction={{
            content: 'Save',
            onAction: save,
          }}
          secondaryActions={[
            {
              content: 'No',
              onAction: backToPages,
            },
          ]}
        >
          <Modal.Section>
            <TextContainer>
              <p>
                Do you want to save changes?
              </p>
            </TextContainer>
          </Modal.Section>
        </Modal>
    );
  }
}

export default PopUp;