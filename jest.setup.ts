import '@testing-library/jest-dom'



import { server } from './src/mocks/node'
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

jest.mock('swiper/css', () => {});
jest.mock('swiper/css/navigation', () => {});
jest.mock('swiper/css/pagination', () => {});
jest.mock('swiper/css/scrollbar', () => {});



