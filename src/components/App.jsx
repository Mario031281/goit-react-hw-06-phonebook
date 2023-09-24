import { ContactsList } from './ContactsList/ContactsList';
import { FormContact } from './Form/Form';
import { Toaster } from 'react-hot-toast';
import { Sections } from './Sections/Sections';
import { FilterContact } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyled';

export const App = () => {
  return (
    <div>
      <FormContact />
      <Sections />
      <FilterContact />
      <ContactsList />
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
