import i18n from '../i18n';
import { NavProps } from '../models/index';
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
export const NAV: NavProps[] = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'Tv Shows',
    url: '/tvshow',
  },
  {
    title: 'Movies',
    url: '/movies',
  },
];
