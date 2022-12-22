import { HeaderProps } from '../models/index';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { RxLightningBolt } from 'react-icons/rx';
import i18n from '../i18n';
export interface Question {
  id: number;
  show: boolean;
  question: string;
  answer: string;
}
export const LIST_QUESTIONS: Question[] = [
  {
    id: 1,
    question: i18n.t('question1'),
    answer: i18n.t('answer1'),
    show: false,
  },
  {
    id: 2,
    show: false,
    question: i18n.t('question2'),
    answer: i18n.t('answer2'),
  },
  {
    id: 3,
    show: false,
    question: i18n.t('question3'),
    answer: i18n.t('answer3'),
  },
  {
    id: 4,
    show: false,
    question: i18n.t('question4'),
    answer: i18n.t('answer4'),
  },
  {
    id: 5,
    show: false,
    question: i18n.t('question5'),
    answer: i18n.t('answer5'),
  },
  {
    id: 6,
    show: false,
    question: i18n.t('question6'),
    answer: i18n.t('answer6'),
  },
];
export const HEADER_LIST: HeaderProps[] = [
  {
    title: 'HOME',
    icon: AiOutlineHome,
    url: '/home',
  },
  {
    title: 'TRENDING',
    icon: RxLightningBolt,
    url: '/home',
  },
  {
    title: 'ACCOUNT',
    icon: AiOutlineUser,
    url: '/home',
  },
];
