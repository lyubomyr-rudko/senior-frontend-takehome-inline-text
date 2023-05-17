import styled, { css } from 'styled-components';

const colors = {
  bgDark: '#000000',
  bgLight: '#FFFFFF',
  grey100: '#f4f6f8',
  gray200: '#EAECF0',
  grey600: '#475467',
  grey900: '#101828',
};

const shadows = {
  xl: css`
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  `,
};

const lines = {
  lightSeparator: css`
    border: 1px solid rgba(0, 0, 0, 0.08);
  `,
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.bgLight};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  ${lines.lightSeparator}
  ${shadows.xl};
  overflow: hidden;

  // TODO: remove this!!!
  height: 492px;
`;

export const Header = styled.div`
  background: ${colors.bgLight};
  display: flex;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  height: 56px;
  border-bottom: 1px solid ${colors.gray200};
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  height: 24px;
`;

export const Body = styled.div`
  padding: 12px 8px;
  width: 100%;
  overflow: auto;
  flex-grow: 1;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.grey600};
  padding-left: 10px;
  margin-bottom: 2px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 12px;
  height: 60px;
  border-bottom: 1px solid ${colors.gray200};
  margin-left: 16px;
  border-top: 1px solid ${colors.gray200};
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  height: 40px;
  width: 100%;
`;

export const ListItemTitle = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.grey900};
`;

export const FooterTitle = styled(ListItemTitle)`
  margin-left: 6px;
  display: inline-block;
  width: calc(100% - 84px);
`;

export const ListItemInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px 6px 10px;
  height: 36px;
  border-radius: 8px;
  flex-grow: 1;
  margin: 2px 0px;

  &:hover,
  &:focus {
    background: ${colors.grey100};
    cursor: pointer;
  }
`;

export const Icon = styled.div<{ uri: string }>`
  width: 24px;
  min-width: 24px;
  height: 24px;
  position: relative;
  &::before {
    background: url(${({ uri }) => uri}) no-repeat center;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
