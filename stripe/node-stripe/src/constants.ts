type Subscription = {
  id: string;
  prices: {
    short: string;
    mid: string;
    long: string;
  };
};

export const SUBSCRIPTIONS: {
  plus: Subscription;
  premium: Subscription;
} = {
  premium: {
    id: "prod_Pu5gEhDVxkLt7s",
    prices: {
      short: "price_1P4HUrP7LyQtEQaSyrf3l1HF", // 1month
      mid: "",
      long: "price_1P90jXP7LyQtEQaSEFQFZZxJ", // 1year
    },
  },
  plus: {
    id: "prod_PtfFcSyD4r1bKL",
    prices: {
      short: "price_1P3rueP7LyQtEQaS1ktNk0yg", // 1month
      mid: "",
      long: "price_1P90jtP7LyQtEQaSYPCFYcCi", // 1year
    },
  },
};

export const DUMMY_SUBSCRIPTIONS: {
  plus: Subscription;
  premium: Subscription;
} = {
  premium: {
    id: "prod_QYvUn90Cht7rlh",
    prices: {
      short: "price_1PhndGP7LyQtEQaSACBPUj7D", // 1day
      mid: "price_1Phtd1P7LyQtEQaSUz6OGWKj", // 2days
      long: "price_1PhneXP7LyQtEQaSXgroWz7C", // 5days
    },
  },
  plus: {
    id: "prod_QYvx9USqN753Ke",
    prices: {
      short: "price_1Pho5IP7LyQtEQaSCXmu70qd", // 1day
      mid: "price_1PhteMP7LyQtEQaSfkY0d91c", // 2days
      long: "price_1Pho5pP7LyQtEQaSpMOKYLvK", // 5days
    },
  },
};
