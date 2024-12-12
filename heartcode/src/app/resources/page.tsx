import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = ({ image, link }: { image?: string, link?: string }) => (
  <a href={link}>
    <div
      className="flex flex-1 w-full h-44 min-h-[6rem] rounded-xl bg-cover bg-center border"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  </a>
);

const items = [
  {
    title: "Teen Challenge",
    description: "For those struggling with drug/inhalant abuse, teenage gangsters, runaways, school-dropouts, delinquents, crisis counselling.",
    header: <Skeleton link="https://www.teenchallenge.org.sg/" image="https://yt3.ggpht.com/a/AATXAJzoUMuGBn7QiYSMUKwOBOLWRY7gtojOdhPYEEZ9=s900-c-k-c0xffffffff-no-rj-mo" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TOUCHline (Touch Community Services)",
    description: "Emotional support and practical advice are rendered through this youth helpline.",
    header: <Skeleton link="https://www.touch.org.sg/" image="https://media.licdn.com/dms/image/v2/C510BAQGqVQ2So17_cQ/company-logo_200_200/company-logo_200_200/0/1630572254705/touch_community_services_logo?e=2147483647&v=beta&t=qywnrxdewGxg6U3xrHTnat-hSxam4atIsVPimMOt5e8" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CHAT (Young People’s Minds Matter)",
    description: "Mental health checks and web-chat support for youths.",
    header: <Skeleton link="https://www.imh.com.sg/CHAT/About%20CHAT/Pages/default.aspx" image="https://media.licdn.com/dms/image/v2/D560BAQG0dPwl1snSzA/company-logo_200_200/company-logo_200_200/0/1716251236113/chat_sg_logo?e=2147483647&v=beta&t=FXnQFbcF9PPc8IGKLU4MceJyrC6JdHGXG46h5NZcrG0" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "National Addictions Management Service",
    description: "Enabling and empowering vulnerable families.",
    header: <Skeleton link="https://www.nams.sg/Pages/default.aspx" image="https://www.ncpg.org.sg/images/default-source/support-services-logo/the-national-addictions-management-services.png?sfvrsn=f4435125_3" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Singapore Anti-Narcotics Association",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton link="https://www.sana.org.sg/" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5mXqZHbF1nMHuGVDE3zGxWHmK0qDYfzIrOGH06_PnkaGpqAxyUiU9X-UnRM1kVx0z-Y&usqp=CAU" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "WE CARE Community Services Ltd",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton link="https://www.wecare.org.sg/" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwNWBI_L73fiMNBmZpEm447N5gOURSzgw3w&s" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Resources() {
  return (
    <>
   <div className="text-center text-3xl font-bold">
    Resources
    </div>
    <p className="text-center text-1xl font-semibold">
    Click to find out more on the organisations below
    </p>
    <BentoGrid className="max-w-4xl mx-auto h-fit">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className=""
        />
      ))}
    </BentoGrid>
    </>
  );
}
