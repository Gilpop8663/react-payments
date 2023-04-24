import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';
import Error from '../../common/Error';
import InformationButton from '../../common/InformationButton';
import ToolTip from '../../common/ToolTip';

interface CvcInputProps {
  cvc: UseInputProps;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InformationAndInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding: 0 16px;
`;

const CvcButtonWrapper = styled.div`
  position: relative;
  margin-left: 11px;
`;

export default function CvcInput({ cvc }: CvcInputProps) {
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const handleToolTip = () => {
    setIsOpenToolTip((prev) => !prev);
  };

  return (
    <Container>
      <InformationAndInputWrapper>
        <Wrapper>
          <Input
            type="password"
            textAlign="center"
            autoComplete="off"
            isNumber={true}
            maxLength={3}
            required
            id="cvc"
            placeholder="000"
            tabIndex={7}
            {...cvc}
          />
        </Wrapper>
        <CvcButtonWrapper>
          <InformationButton onClick={handleToolTip} />
          {isOpenToolTip && (
            <ToolTip
              onClick={handleToolTip}
              text={
                'CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다'
              }
            />
          )}
        </CvcButtonWrapper>
      </InformationAndInputWrapper>
      {cvc.error && <Error text={cvc.error} />}
    </Container>
  );
}
