/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import HelpIcon from '../assets/svg/help-icon.svg';
import LoadingSpinner from '../assets/svg/Loading Spinner.svg';
import AnnotationHeart from '../assets/svg/annotation-heart.svg';
import Briefcase from '../assets/svg/briefcase-02.svg';
import ChevronDown from '../assets/svg/chevron-down.svg';
import FileIcon from '../assets/svg/file-02.svg';
import HeadingSquare from '../assets/svg/heading-square.svg';
import InfoCircle from '../assets/svg/info-circle.svg';
import Lightbulb from '../assets/svg/lightbulb-02.svg';
import List1Icon from '../assets/svg/list-1.svg';
import ListIcon from '../assets/svg/list.svg';
import ComposeLogo from '../assets/svg/logo_compose_svg.svg';
import Mail from '../assets/svg/mail-02.svg';
import Menu from '../assets/svg/menu-05.svg';
import MultiParagraphSquare from '../assets/svg/multi-paragraph-square.svg';
import ParagraphSquare from '../assets/svg/paragraph-square.svg';
import ZapFast from '../assets/svg/zap-fast.svg';

import {
  Wrapper,
  Header,
  Input,
  Body,
  List,
  ListItem,
  Icon,
  Footer,
  Title,
  ListItemInner,
  ListItemTitle,
  FooterTitle,
} from './InlineText.styles';
import { ProTip } from './ProTip';
import { debug } from 'console';

interface ListOption {
  text: string;
  iconUri: string;
}

/**
 * Hardcoded list of menu items and their icons from the design
 */
const listOptionsAll: ListOption[] = [
  ['outline for a', ListIcon],
  ['bullet list of', List1Icon],
  ['headline for a', HeadingSquare],
  ['paragraph about', ParagraphSquare],
  ['couple paragraphs about', MultiParagraphSquare],
  ['sentence about', Menu],
  ['few ideas for', Lightbulb],
  ['bit of information about', InfoCircle],
  ['email to', Mail],
].map((lo) => ({ text: lo[0], iconUri: lo[1] }));

export interface InlineTextProps {
  /**
   * DOM Id of the element
   */
  id?: string;
}

export const InlineText: React.FC<InlineTextProps> = ({ id }) => {
  const [listOptions, setListOptions] = React.useState<ListOption[]>(listOptionsAll);
  const [inputValue, setInputValue] = React.useState('Write a');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.startsWith('Write a')) {
      setInputValue(newValue);

      const searchText = getSearchText(newValue);

      if (searchText === '') {
        setListOptions(listOptionsAll);
      } else {
        setListOptions(listOptionsAll.filter((lo) => lo.text.includes(searchText)));
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchText = getSearchText(inputValue);

    if (searchText === '') {
      return;
    }

    if (e.key === 'Enter' || e.key === 'Tab') {
      console.log('SENDING REQUEST TO API', inputValue);
    }
  };

  return (
    <Wrapper id={id}>
      <Header>
        <Icon uri={ComposeLogo} />
        <Input value={inputValue} onChange={handleTextChange} autoFocus onKeyDown={handleKeyDown} />
        <Icon uri={HelpIcon} />
      </Header>
      <Body>
        <Title>Type anything or...</Title>
        <List>
          {listOptions.map((lo) => (
            <ListItem key={lo.text}>
              <ListItemInner
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === 'Enter') {
                    console.log('SENDING REQUEST TO API', `Write a ${lo.text}`);
                  }
                }}
              >
                <Icon uri={lo.iconUri} />
                <ListItemTitle>{`${lo.text}...`}</ListItemTitle>
              </ListItemInner>
            </ListItem>
          ))}
        </List>
      </Body>
      <Footer>
        <Icon uri={ZapFast} />
        <FooterTitle>Advanced Options</FooterTitle>
        <Icon uri={ChevronDown} />
      </Footer>
    </Wrapper>
  );
};

function getSearchText(value: string): string {
  let searchText = '';

  // TODO: This is a hacky way to get the search text
  if (value.startsWith('Write a ')) {
    searchText = value.replace('Write a ', '').trim();
  } else if (value !== 'Write a') {
    searchText = value.replace('Write', '').trim();
  }

  return searchText;
}
