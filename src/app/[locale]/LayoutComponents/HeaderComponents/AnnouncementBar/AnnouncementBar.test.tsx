import {render, screen} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import en_messages from '../../../../../../messages/en.json';
import ar_messages from '../../../../../../messages/ar.json';
import AnnouncementBar from './AnnouncementBar';
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
  

 
describe('AnnouncementBar', () => {
  test('should render in english announcement title', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByText('Summer Sale For All Body Cosmatics And Free Express Delivery - OFF 50%!');
    expect(element).toBeInTheDocument();
  });
  test('should render in english announcement shop now', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'Shop Now'});
    expect(element).toBeInTheDocument();
  });
  test('should render in arabic announcement title', () => {
    render(
      <NextIntlClientProvider locale='ar' messages={ar_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByText('تخفيضات الصيف على جميع مستحضرات التجميل للجسم وتوصيل سريع مجاني - خصم 50%!');
    expect(element).toBeInTheDocument();
  });
  test('should render in arabic announcement shop now', () => {
    render(
      <NextIntlClientProvider locale='ar' messages={ar_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'تسوق الان'});
    expect(element).toBeInTheDocument();
  });
  test('render language switcher in english', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const languageSwitcher = screen.getByRole('combobox');
    expect(languageSwitcher).toBeInTheDocument();
  });
  test('render language switcher in arabic', () => {
    render(
      <NextIntlClientProvider locale='ar' messages={ar_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const languageSwitcher = screen.getByRole('combobox');
    expect(languageSwitcher).toBeInTheDocument();
  });



  test('should render in sign up button in arabic', () => {
    render(
      <NextIntlClientProvider locale='ar' messages={ar_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'انشاء حساب'});
    expect(element).toBeInTheDocument();
  });

  test('should render in sign up button in english', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'Sign Up'});
    expect(element).toBeInTheDocument();
  });


  test('should render in sign in button in arabic', () => {
    render(
      <NextIntlClientProvider locale='ar' messages={ar_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'تسجيل الدخول'});
    expect(element).toBeInTheDocument();
  });

  test('should render in sign in button in english', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <AnnouncementBar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole('link', {name: 'Sign In'});
    expect(element).toBeInTheDocument();
  });

});