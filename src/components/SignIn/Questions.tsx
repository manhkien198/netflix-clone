import { Section } from '../../shared/styled/Section';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Question } from '../../constant/index';

import { LIST_QUESTIONS } from '../../constant/index';
export default function Questions() {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState(LIST_QUESTIONS);
  const handleClickQuestion = (id: number) => {
    setQuestions(
      questions.map((question: Question) => ({
        ...question,
        show: question.id === id ? !question.show : false,
      }))
    );
  };
  return (
    <Section>
      <h2 className='text-white text-[3.125rem] text-center'>
        {t('questions')}
      </h2>
      <ul className='w-[75%] my-[2rem] mx-auto'>
        {questions.map((question: Question) => (
          <li
            key={question.id}
            className='w-full bg-[#303030] mb-2'
            onClick={() => handleClickQuestion(question.id)}
          >
            <button className='text-left text-white px-5 py-4 flex justify-between w-full items-center text-[1.25rem]'>
              {question.question}
              <div>
                {!question.show ? <AiOutlinePlus /> : <AiOutlineClose />}
              </div>
            </button>
            {question.show && (
              <p className='border-t-2  px-5 py-4  text-white border-black'>
                {question.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
