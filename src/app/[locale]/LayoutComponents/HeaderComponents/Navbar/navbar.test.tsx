import user from '@testing-library/user-event'
import { act, render, screen, } from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import en_messages from '../../../../../../messages/en.json';
import Navbar from './navbar';
import SearchBar from './components/SearchBar';
import '@testing-library/jest-dom';
import * as InputSearchModule from './actions/InputSearch';


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
  jest.mock('./actions/InputSearch', () => ({
    __esModule: true,
    InputSearch: jest.fn(),
  }));
 
  beforeAll(() => {
    (InputSearchModule.InputSearch as jest.Mock).mockResolvedValue([
      { id: "cm9ymkirg00007cbprqpuivps",
         nameEn:"Panadol 250mg",
         nameAr:"بانادول 250مجم",
         descriptionEn:"Used for treating common conditions such as anti-allergies.",
         descriptionAr:"يستخدم لعلاج الحالات الشائعة مثل مضادات الحساسية.",
         images:[
          {
            id:"cm9ymkirg00017cbp39i9b9hk",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoefmBQB-lyDBJYBH6mpW2PdufrnDVUwCmw&s",
            productId:"cm9ymkirg00007cbprqpuivps"
          },
          {
            id:"cm9ymkirg00027cbpkmrz7m4z",
            url:"data:image/jpeg;base64,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",
            productId:"cm9ymkirg00007cbprqpuivps"
          },
          {
            id:"cm9ymkirg00037cbppcb0xou1",
            url:"data:image/png;base64,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",
            productId:"cm9ymkirg00007cbprqpuivps"
          },
          {
            id:"cm9ymkirg00047cbp4zyy10eb",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoefmBQB-lyDBJYBH6mpW2PdufrnDVUwCmw&s",
            productId:"cm9ymkirg00007cbprqpuivps"
          },
          {
            id:"cm9ymkirg00057cbpf01scvm6",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgM_l4kuskBDsv6vbWFGox-4v6hWcrMDkrg&s",
            productId:"cm9ymkirg00007cbprqpuivps"
          },
         ],
         categoryEn:"Pain Relief",
         categoryAr:"مسكنات الألم",
         price:30,
         titleEn:"Effective Pain Relief Treatment",
         titleAr:"علاج فعال لمسكنات الألم",
         howToUseEn:"Take 1-2 tablets as prescribed. Follow the instructions for dosage based on the condition.",
         howToUseAr:"تناول 1-2 أقراص حسب الوصفة. اتبع التعليمات للجرعة بناءً على الحالة.",
         overdoseEn:"May cause side effects if overdosed, consult a doctor.",
         overdoseAr:"قد يسبب آثار جانبية عند الجرعة الزائدة، استشر الطبيب.",
         ingredientsEn:"Paracetamol, Caffeine",
         ingredientsAr:"باراسيتامول، كافيين",
         adImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoefmBQB-lyDBJYBH6mpW2PdufrnDVUwCmw&s",



       },
    ]);
  });
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

  test('should render call link in navbar', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <Navbar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole("link",{name:"call"})
    expect(element).toBeInTheDocument(); 
  });

  test('should render cart button in navbar', () => {
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <Navbar/>
      </NextIntlClientProvider>
    );
    const element = screen.getByRole("button",{name:"cart"})
    expect(element).toBeInTheDocument(); 
  });




  test('should render search result in navbar',async () => {
    user.setup()

   
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <SearchBar />
      </NextIntlClientProvider>
    );

    const searchBar=screen.getByRole("textbox")

    expect(searchBar).toBeInTheDocument(); 

    await act(async () => {
      await user.type(searchBar, 'panadol');

    });
    expect(searchBar).toHaveValue('panadol')
   

    expect(screen.getByTestId('search-result')).toBeInTheDocument();

const image=screen.getByRole('img')

  expect(image).toBeInTheDocument();
  const name=screen.getByText('Panadol 250mg')
  expect(name).toBeInTheDocument();

  const price=screen.getByText('30 LE')
  expect(price).toBeInTheDocument();

  const title=screen.getByText('Effective Pain Relief Treatment')
  expect(title).toBeInTheDocument();
  });

});