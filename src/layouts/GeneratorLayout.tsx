import React, { useState, useEffect } from 'react';

import Lottie from 'react-lottie';

import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';

import LinkIcon from '../icons/LinkIcon';
import animationData from '../lotties/link.json';

import useShortenerStore, { ShortenerState } from '../store/useShortenerStore';
import { isUrlValid } from '../utils';

function GeneratorLayout() {
  const { postLink, generatedLink, isLoading }: ShortenerState = useShortenerStore();
  const [link, setLink] = useState('');
  const [isErrored, setIsErrored] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const postLinkAction = async () => {
    const isValid = isUrlValid(link);

    if (isValid) {
      await postLinkAction();
    }
    
    setIsErrored(!isValid);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e?.target?.value);
  };

  const handleClick = () => {
    postLinkAction();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      postLinkAction();
    }
  }

  useEffect(() => {
    if (isErrored) {
      setIsErrored(!isUrlValid(link));
    }
  }, [isErrored, link])

  return (
    <div className='flex flex-col items-center justify-center px-2 py-8 my-3 bg-white w-80 rounded-xl'>
      {!isLoading && (
        <div className='flex items-center gap-2'>
          <LinkIcon />
          <Title title="shrtn" />
        </div>
      )}
      {isLoading
        ? (
          <Lottie
            options={defaultOptions}
            height={120}
            width={120}
          />
        )
        : (
          <div className='flex flex-col w-full gap-4 mt-6'>
            <Input
              placeholder='Enter URL'
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              isErrored={isErrored}
            />
            <Button text='Shorten It' onClick={handleClick} />
          </div>
        )}
      {generatedLink && (
        <a
          className='mt-4 font-semibold underline'
          href={generatedLink}
          target='_blank'
          rel='noreferrer'
        >
          Click Here
        </a>
      )}
    </div>
  );
}

export default GeneratorLayout;
