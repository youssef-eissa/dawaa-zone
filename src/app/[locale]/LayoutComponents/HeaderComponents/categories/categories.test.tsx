import {render, screen} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import en_messages from '../../../../../../messages/en.json';

import CategoriesSlider from './CategoriesSlider';
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
  

 
describe('Categories', () => {

  type locale = 'ar' | 'en'
  
  

  test('should render categories slider', async () => {
    const locale :locale="ar"
    const categories=[
      {
        nameEn: "Voltaren Emulgel #1",
        nameAr: "فولتارين إمولجيل رقم 1",
        descriptionEN: "Voltaren Emulgel is a topical anti-inflammatory gel used to relieve muscle and joint pain caused by sprains, strains, and arthritis.",
        descriptionAr: "فولتارين إمولجيل هو جل مضاد للالتهاب يُستخدم لتخفيف آلام العضلات والمفاصل الناتجة عن الالتواءات والإجهاد والتهاب المفاصل.",
        categoryEn: "Oral Care",
        categoryAr: "العناية بالفم",
        price: 100,
        titleEn: "Voltaren Emulgel Title",
        titleAr: "عنوان فولتارين إمولجيل",
        isFav: true,
        howToUseEn: "Take 1 tablet(s) daily after meals.",
        howToUseAr: "تناول 1 قرص يوميًا بعد الأكل.",
        overdoseEn: "Seek medical help in case of overdose.",
        overdoseAr: "اطلب المساعدة الطبية في حالة الجرعة الزائدة.",
        ingredientsEn: "Active ingredient info in English.",
        ingredientsAr: "مكونات الدواء باللغة العربية.",
        adImage: "https://cdn.example.com/image_1.jpg",
      },
      {
        nameEn: "Augmentin 1g #2",
        nameAr: "أوجمنتين ١جم رقم 2",
        descriptionEN: "Augmentin 1g is a broad-spectrum antibiotic used to treat various infections caused by bacteria, such as respiratory tract infections and urinary tract infections.",
        descriptionAr: "أوجمنتين ١جم هو مضاد حيوي واسع الطيف يستخدم لعلاج مختلف أنواع العدوى البكتيرية، مثل التهابات الجهاز التنفسي والتهابات المسالك البولية.",
        categoryEn: "Oral Care",
        categoryAr: "العناية بالفم",
        price: 100,
        titleEn: "Augmentin 1g Title",
        titleAr: "عنوان أوجمنتين ١جم",
        isFav: false,
        howToUseEn: "Take 2 tablet(s) daily after meals.",
        howToUseAr: "تناول 1 قرص يوميًا بعد الأكل.",
        overdoseEn: "Seek medical help in case of overdose.",
        overdoseAr: "اطلب المساعدة الطبية في حالة الجرعة الزائدة.",
        ingredientsEn: "Active ingredient info in English.",
        ingredientsAr: "مكونات الدواء باللغة العربية.",
        adImage: "https://cdn.example.com/image_2.jpg",
      },
      {
        nameEn: "Zyrtec 10mg #3",
        nameAr: "زيرتك 10 مجم رقم 3",
        descriptionEN: "Zyrtec 10mg is an antihistamine used to treat allergy symptoms such as sneezing, runny nose, and itchy or watery eyes.",
        descriptionAr: "زيرتك 10 مجم هو مضاد للهستامين يُستخدم لعلاج أعراض الحساسية مثل العطس، وسيلان الأنف، والحكة أو العيون الدامعة.",
        categoryEn: "Allergy",
        categoryAr: "حساسية",
        price: 92,
        titleEn: "Zyrtec 10mg Title",
        titleAr: "عنوان زيرتك 10 مجم",
        isFav: true,
        howToUseEn: "Take 2 tablet(s) daily after meals.",
        howToUseAr: "تناول 1 قرص يوميًا بعد الأكل.",
        overdoseEn: "Seek medical help in case of overdose.",
        overdoseAr: "اطلب المساعدة الطبية في حالة الجرعة الزائدة.",
        ingredientsEn: "Active ingredient info in English.",
        ingredientsAr: "مكونات الدواء باللغة العربية.",
        adImage: "https://cdn.example.com/image_3.jpg",
      },
    ]


  
  const categoriesSet=categories.map((category) => locale==="ar"?category.categoryAr:category.categoryEn)
    render(
      <NextIntlClientProvider locale='en' messages={en_messages}>
        <CategoriesSlider categoriesSet={[...categoriesSet]} />
      </NextIntlClientProvider>
    );
    const list = screen.queryByRole("list")
    expect(list).toBeInTheDocument();

    const items = screen.queryAllByRole("listitem")
    expect(items).toHaveLength(3);
  });

 

  

});