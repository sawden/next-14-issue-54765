import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: <b>{lang}</b></p>
      <p dangerouslySetInnerHTML={{ __html: dictionary["server-component"].text }}></p>
      <br />
      <Image src="/sad-pikachu.jpg" alt={dictionary["server-component"].imageAlt} width={500} height={500} />
    </div>
  );
}
