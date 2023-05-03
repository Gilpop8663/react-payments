import React, { useState } from 'react';
import { PageInfo } from '@type/types';
import { PAGE_KIND } from '@constants/constant';

interface PageContextProps {
  page: PageInfo;
  setPage: (page: PageInfo) => void;
}

const PageContext = React.createContext<PageContextProps>({
  page: PAGE_KIND.HOME,
  setPage: () => {},
});

function PageContextProvider({ children }: React.PropsWithChildren) {
  const [page, setPage] = useState<PageInfo>(PAGE_KIND.HOME);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContext, PageContextProvider };
