(function () {
  const API_URL = "https://random-quote.hyobb.com/";
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDate = new Date();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();

  // 명언을 텍스트로 설정 기능
  const setQuote = (result) => {
    let quote = { createDate: `${month}-${date}`, quotaData: result };
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = result;
  };

  const getQuote = async () => {
    try {
      // fetch는 promise 함수를 호출하는 비동기 함수
      // await을 사용하면 위에 async 사용
      const date = await fetch(API_URL).then((res) => res.json());
      const result = data[1].respond;
      setQuote(result);
    } catch (err) {
      console.log(`err:${err}`);
      setQuote("작은 기회로 부터 종종 위대한 업적이 시작된다. -데모스테네스");
    }
  };

  if (quoteItem) {
    let { createDate, quotaData } = JSON.parse(quoteItem);
    if (createDate == `${month}-${date}`) {
      quoteElement.textContent = `"${quotaData}"`;
    } else {
      getQuote();
    }
  } else {
    getQuote();
  }
})();
