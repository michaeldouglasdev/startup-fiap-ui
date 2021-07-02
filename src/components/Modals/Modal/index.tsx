import React from 'react';
import { MdClose } from 'react-icons/md';
import { Body, Container, Header, HeaderTitle, ModalWrapper } from './styles';

export interface ModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, visible, children, onClose }) => {

  return (
    <>
      { visible &&
        <Container>
          <ModalWrapper>
            <Header>
              <HeaderTitle>
                {title}
              </HeaderTitle>
              <MdClose onClick={onClose} />
            </Header>
            <Body>
              {children}
            </Body>
          </ModalWrapper>
        </Container>
      }
    </>
  )
}

export default Modal;