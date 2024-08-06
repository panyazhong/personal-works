import { localeAtom } from "@/models/store";
import { useAtom } from "jotai";
import { tw } from "twind";

import Contract from "@/assets/0804_1.jpg";

const ContractInfo = () => {
  const InfoMap = {
    title: {
      zh: "联系方式：",
      en: "CONTACT INFORMATION：",
      fr: "CONTACT：",
    },
    email: {
      zh: "邮箱：nf@nanfang-art.com",
      en: "EMAIL：nf@nanfang-art.com",
      fr: "EMAIL：nf@nanfang-art.com",
    },
    tel: {
      title: {
        zh: "电话：",
        en: "TEL：",
        fr: "TEL：",
      },
      phone: {
        zh: "0033-753750525（法国）",
        en: "0033-753750525（FRANCE）",
        fr: "0033-753750525（FRANCE）",
      },
      number: {
        zh: "15066899551（微信 同号）",
        en: "15066899551（CHINA）",
        fr: "15066899551（CHINE）",
      },
    },
  };

  const [locale] = useAtom(localeAtom);

  return (
    <div className={tw`flex h-full justify-center items-center`}>
      <div className={tw`flex flex-col text-frc-100`}>
        <img src={Contract} alt="" />
        {/* <strong>{InfoMap.title[locale]}</strong>
        <span>{InfoMap.email[locale]}</span>
        <span className={tw`flex`}>
          {InfoMap.tel.title[locale]}
          <span>
            {InfoMap.tel.phone[locale]}
            <br />
            {InfoMap.tel.number[locale]}
          </span>
          <span></span>
        </span> */}
      </div>
    </div>
  );
};

export default ContractInfo;
