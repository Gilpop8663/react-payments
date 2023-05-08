import React from 'react';
import styled from 'styled-components';
import { type UseInputProps } from '@hooks/useInput';
import { Error } from '@components/common/Error';
import { Input } from '@components/common/Input';
import { TAB_INDEX_INFO } from '@constants/constant';
import { ADD_CARD_TEST_ID } from '@constants/storybookTest';

export interface OwnerInputProps {
  id: string;
  ownerInformation: UseInputProps;
}

const { ADD_CARD_PAGE_TAB_INDEX } = TAB_INDEX_INFO;

export default function OwnerInput({ id, ownerInformation }: OwnerInputProps) {
  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          id={id}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.OWNER}
          autoComplete="off"
          autoCapitalize="characters"
          lang="en"
          enterKeyHint="next"
          data-testid={ADD_CARD_TEST_ID.OWNER}
          {...ownerInformation}
        />
      </Wrapper>
      {ownerInformation.error && <Error text={ownerInformation.error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 8px;
  box-sizing: border-box;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inputGray};
  height: 45px;
  border-radius: 7px;
`;
