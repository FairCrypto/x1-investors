export const investorsRaw: Array<Record<string, any>> = [
  { country: 'USA', countryCode: 'US',  amount: 355_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 20_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 500_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 10_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 10_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 20_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 15_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 10_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 75_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 20_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 100_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 50_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 40_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 25_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 10_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 100_000, investors: 1 },
  { country: 'USA', countryCode: 'US',  amount: 10_000, investors: 1 },
  { country: 'Saudi Arabia', countryCode: 'SA',  amount: 30_000, investors: 1 },
  { country: 'Australia', countryCode: 'AU',  amount: 20_000, investors: 1 },
  { country: 'Australia', countryCode: 'AU',  amount: 200_000, investors: 1 },
  { country: 'China', countryCode: 'CN',  amount: 50_000, investors: 1 },
  { country: 'China', countryCode: 'CN',  amount: 20_000, investors: 1 },
  { country: 'China', countryCode: 'CN',  amount: 30_000, investors: 1 },
  { country: 'India', countryCode: 'IN',  amount: 525_000, investors: 1 },
  { country: 'Singapore', countryCode: 'SG',  amount: 15_000, investors: 1 },
  { country: 'Sweden', countryCode: 'SE',  amount: 50_000, investors: 1 },
  { country: 'Sweden', countryCode: 'SE',  amount: 30_000, investors: 1 },
  { country: 'Canada', countryCode: 'CA',  amount: 50_000, investors: 1 },
  { country: 'Hong Kong', countryCode: 'HK',  amount: 50_000, investors: 1 },
  { country: 'Poland', countryCode: 'PL',  amount: 12_000, investors: 1 },
  { country: 'Switzerland', countryCode: 'CH',  amount: 10_000, investors: 1 },
  { country: 'United Kingdom', countryCode: 'GB',  amount: 10_000, investors: 1 },
];

export const investors = investorsRaw.reduce((acc, curr) => {
  const existing = acc.find((item: any) => item.country === curr.country);
  if (existing) {
    existing.amount += curr.amount;
    existing.investors += curr.investors;
  } else {
    acc.push({ ...curr });
  }
  return acc;
}, []).sort((a: any, b: any) => b.amount - a.amount)
