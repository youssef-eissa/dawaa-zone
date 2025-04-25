import {render, screen} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import en_messages from '../../../../../../messages/en.json';
import ar_messages from '../../../../../../messages/ar.json';
import Navbar from './navbar';
import '@testing-library/jest-dom';
jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => ({
      get: jest.fn(),
    }),
  }));
  

 
describe('Navbar', () => {

  test('should render  navbar', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <Navbar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole("navigation")
    expect(element).toBeInTheDocument();
  });

  test('should render logo in navbar', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <Navbar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole("img",{name:"logo"})
    expect(element).toBeInTheDocument();
  });

  test('should render search bar in navbar', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <Navbar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole("textbox")
    expect(element).toBeInTheDocument();
  });

});