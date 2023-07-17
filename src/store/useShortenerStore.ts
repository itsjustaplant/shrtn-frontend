import { create } from 'zustand';

import { postLinkRequest, getLinkRequest } from '../api';

const initialState = {
  isLoading: false,
  isErrored: false,
  generatedLink: '',
  redirectURL: ''
};

export interface ShortenerState {
  isLoading: boolean,
  isErrored: boolean,
  generatedLink: string,
  redirectURL: string,
  postLink: (link: string) => void,
  getLink: (origin: string) => void
}

const useShortenerStore = create<ShortenerState>((set) => ({
  isLoading: initialState.isLoading,
  isErrored: initialState.isErrored,
  generatedLink: initialState.generatedLink,
  redirectURL: initialState.redirectURL,

  postLink: async (link: string) => {
    set((state: ShortenerState) => ({ ...state, isLoading: true, isErrored: false, generatedLink: '' }));

    try {
      const generatedLink = await postLinkRequest(link);
      set((state: ShortenerState) => ({ ...state, isErrored: false, generatedLink }));
    } catch (e) {
      set((state: ShortenerState) => ({ ...state, isErrored: true }));
    } finally {
      set((state: ShortenerState) => ({ ...state, isLoading: false }));
    }
  },

  getLink: async (originalURL: string) => {
    set((state: ShortenerState) => ({ ...state, isLoading: true, isErrored: false }));

    try {
      const { statusCode, originalURL: redirectURL } = await getLinkRequest(originalURL);
      if (!statusCode || !redirectURL) {
        set((state: ShortenerState) => ({ ...state, isErrored: true }));
      } else {
        const isOK = statusCode === '200';
        set((state: ShortenerState) => ({ ...state, isErrored: !isOK, redirectURL }));
      }
    } catch (e) {
      set((state: ShortenerState) => ({ ...state, isErrored: true }));
    } finally {
      set((state: ShortenerState) => ({ ...state, isLoading: false }));
    }
  }
}));

export default useShortenerStore;
