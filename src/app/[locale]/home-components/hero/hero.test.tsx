import { render,screen } from "@testing-library/react";
import Hero from "./Hero";
import { NextIntlClientProvider } from "next-intl";
import en_messages from '../../../../../messages/en.json';

import '@testing-library/jest-dom'

  


  

describe('Hero',()=>{
    test('should render hero component',()=>{
        render( <NextIntlClientProvider locale='en' messages={en_messages}>
            <Hero/>
          </NextIntlClientProvider>)
        const element = screen.getByRole('img')
        expect(element).toBeInTheDocument();
    })
})