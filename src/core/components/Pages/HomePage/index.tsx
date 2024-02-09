import DateFormatted from "../../IntlFormated/DateFormatted";
import CurrencyFormatted from "../../IntlFormated/CurrencyFormatted";
import NumberFormatted from "../../IntlFormated/NumberFormatted";
import PluralFormatted from "../../IntlFormated/PluralFormatted";
import RelativeTimeFormatted from "../../IntlFormated/RelativeTimeFormatted";
import MessageFormated from "../../IntlFormated/MessageFormated";
import ListFormatted from "../../IntlFormated/ListFormatted";

const HomePage = () => {
  const cityList = ["İzmir", "Ankara", "İstanbul"];

  return (
    <>
      <div className="list">
        <MessageFormated
          id="defination"
          values={{ name: "Test user", company: "konzek" }}
        />
        <MessageFormated id="welcome" />
        <ListFormatted list={cityList} />
        <DateFormatted />
        <CurrencyFormatted amount={1234.56} style="currency" currency="USD" />
        <NumberFormatted value={12345.67} style="decimal" />
        <RelativeTimeFormatted />
        <PluralFormatted value={3} />
      </div>
    </>
  );
};

export default HomePage;
