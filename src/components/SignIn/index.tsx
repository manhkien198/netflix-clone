import { useTranslation } from 'react-i18next';
import Download from '../../assets/images/download-icon.gif';
import Kids from '../../assets/images/kids.png';
import Mobile from '../../assets/images/mobile.jpg';
import Phone from '../../assets/images/phone.jpg';
import Stranger from '../../assets/images/stranger.png';
import Layout from '../../shared/Layout';
import Banner from './Banner';
import GeneralSection from './GeneralSection';
import Media from './Media';
import Questions from './Questions';

export default function SignIn() {
  const { t } = useTranslation();
  return (
    <Layout>
      <Banner />
      <Media />
      <GeneralSection
        title={t('titleSecondSection')}
        desc={t('descSecondSection')}
        reverse
        image={
          <div className='relative'>
            <img className='img' src={Mobile} alt='Mobile' />
            <div className='absolute card flex items-center flex-row gap-2'>
              <img
                className='img'
                src={Stranger}
                alt='Stranger'
                width={51}
                height={72}
              />
              <div>
                <h3 className='text-white'>Stranger Things</h3>
                <p className='text-blue-700'>Downloading...</p>
              </div>
              <img
                className='img'
                src={Download}
                alt='Stranger'
                width={51}
                height={72}
              />
            </div>
          </div>
        }
      />
      <GeneralSection
        title={t('titleThirdSection')}
        desc={t('descThirdSection')}
        image={null}
      />
      <GeneralSection
        title={t('titleFourthSection')}
        desc={t('descFourthSection')}
        image={<img className='img' src={Kids} alt='Kids' />}
        reverse
      />
      <GeneralSection
        title={t('titleFifthSection')}
        desc={t('descFifthSection')}
        image={<img className='img' src={Phone} alt='Phone' />}
      />
      <Questions />
    </Layout>
  );
}
