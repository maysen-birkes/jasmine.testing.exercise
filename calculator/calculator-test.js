
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 12000,
    years: 12,
    rate: 4.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('108.00')
});


it("should return a result with 2 decimal places", function() {
  // ...
  const values = {
    amount: 10000,
    years: 5,
    rate: 3.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('181.47');
});

/// etc
