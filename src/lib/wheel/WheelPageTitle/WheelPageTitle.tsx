import PageTitle from "@/components/PageTitle";

import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import type { WheelPageTitleProps } from ".";

export default function WheelPageTitle({ wheel }: WheelPageTitleProps) {
  const { title } = useWheelDetails(wheel);
  return <PageTitle>{title}</PageTitle>;
}
