/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import HelpIcon from '../assets/svg/Help Icon.svg';
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
import ComposeLogo from '../assets/svg/logo_compose.png.svg';
import Mail from '../assets/svg/mail-02.svg';
import Menu from '../assets/svg/menu-05.svg';
import MultiParagraphSquare from '../assets/svg/multi-paragraph-square.svg';
import ParagraphSquare from '../assets/svg/paragraph-square.svg';
import ZapFast from '../assets/svg/zap-fast.svg';

interface ListOption {
  text: string;
  iconUri: string;
}

/**
 * Hardcoded list of menu items and their icons from the design
 */
const listOptions: ListOption[] = [
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
  return <div id={id}>Your Inline Text Command impl goes here. Good luck!</div>;
};
