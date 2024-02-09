import { FormattedMessage } from "react-intl";
import Text from "../../Text";

const AboutPage = () => {
  return (
    <>
      <Text tag="h1" fontWeight="bold" fontSize="xl">
        <FormattedMessage id="about.title" />
      </Text>
      <Text tag="h2">
        <FormattedMessage id="about.desc" values={{ company: "konzek" }} />
      </Text>
    </>
  );
};

export default AboutPage;
