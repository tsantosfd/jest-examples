import axios from "axios";
import { getApi, getVerion } from ".";
import * as constants from './constants';
import { testFunc } from "./constants";

describe('version / constant', () => {
  it('should return the true value', () => {
    expect(getVerion()).toBe('1.0.0');
  });

  it('should allow me to mock the value', () => {
    Object.defineProperty(constants, 'version', {value: '2.0.0'})
    expect(getVerion()).toBe('2.0.0');
  })
});

describe('function', () => {
  it('should allow me to test the real return value', () => {
    expect(testFunc()).toBe('1')
  })

  it('should allow me to test the real return value', () => {
    const fSpy = jest.spyOn(constants, 'testFunc')
    fSpy.mockReturnValueOnce('mocked value')
    expect(testFunc()).toBe('mocked value')
  })
})

describe('axios module', () => {
  it('should mock the axios call', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockImplementationOnce(async () => ({data: 'test'}))
    expect(await getApi()).toBe('test')
  })
})

describe('window', () => {
  it('should mock window', () => {
    const windowSpy = jest.spyOn(global, 'window', 'get')
    windowSpy.mockImplementationOnce(() => '123' as any)
    expect(window).toBe('123')
  })
})
