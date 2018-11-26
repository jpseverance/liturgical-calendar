import { LiturgicalCalendar } from '../index';

test('Easter Sunday 2018', () => {
  const cal2018 = new LiturgicalCalendar(2018);
  expect(cal2018.easterSunday().toDateString()).toBe('Sun Apr 01 2018');
  expect(cal2018.easterSunday().getFullYear()).toBe(2018);
  expect(cal2018.easterSunday().getMonth()).toBe(3);
  expect(cal2018.easterSunday().getDay()).toBe(0);
});

test('Easter Sunday 2019', () => {
  const cal2019 = new LiturgicalCalendar(2019);
  expect(cal2019.easterSunday().toDateString()).toBe('Sun Apr 21 2019');
});

test('Easter Sunday 2020', () => {
  expect(new LiturgicalCalendar(2020).easterSunday().toDateString()).toBe('Sun Apr 12 2020');
});

test('Easter Sunday 1844', () => {
  expect(new LiturgicalCalendar(1844).easterSunday().toDateString()).toBe('Sun Apr 07 1844');
});

test('Easter Sunday 2100', () => {
  expect(new LiturgicalCalendar(2100).easterSunday().toDateString()).toBe('Sun Mar 28 2100');
});
