"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";

import { useTranslations } from "next-intl";

import { IconBuildingStore, IconTruckDelivery } from "@tabler/icons-react";

import currency from "currency.js";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Select from "@/components/Select";

import { WheelFormProps } from ".";

export default function WheelForm({
  price,
  isDeliveryAvailable,
  isFreeOnSitePickup,
}: WheelFormProps) {
  const [quantity, setQuantity] = useState<number>(2);
  const t = useTranslations("wheels");

  const wheelQuantityOptionList = useMemo(
    () =>
      [...new Array(10)].map((_, index) => ({
        label: `${index + 1}`,
        value: `${index + 1}`,
      })),
    [],
  );

  const computedPrice = useMemo(
    () => currency(price).multiply(quantity).format({ symbol: "" }),
    [price, quantity],
  );

  const handleChangeQuantity = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = Number(event.target.value);
      setQuantity(value);
    },
    [],
  );

  return (
    <form
      aria-label="Wheel Form"
      action="#"
      noValidate
      className="bg-background dark:bg-black rounded py-8 px-4 flex flex-1 flex-col gap-6"
    >
      <div className="bg-yellow flex border border-yellow mt-1 w-fit rounded">
        <div className="flex flex-1 items-start px-1">
          <span className="text-red font-bold text-normal">$</span>
          <span className="text-red font-extrabold text-3xl">
            {computedPrice}
          </span>
        </div>
      </div>

      {(!!isFreeOnSitePickup || !!isDeliveryAvailable) && (
        <ul className="flex flex-col gap-2">
          {!!isFreeOnSitePickup && (
            <li className="inline-flex items-center gap-1">
              <IconBuildingStore
                className="text-primary dark:text-primarydark"
                stroke={1.6}
                size={18}
              />
              <span className="font-medium text-xs">
                {t("filter.free_on_site_pickup.option.true")}
              </span>
            </li>
          )}
          {!!isDeliveryAvailable && (
            <li className="inline-flex items-center gap-1">
              <IconTruckDelivery
                className="text-primary dark:text-primarydark"
                stroke={1.6}
                size={18}
              />
              <span className="font-medium text-xs">
                {t("filter.delivery_available.option.true")}
              </span>
            </li>
          )}
        </ul>
      )}

      <Checkbox
        id="assembly-without-appointment"
        label={t("assemblyWithoutAppointment")}
        checked={false}
        href="#"
      />

      <div className="flex flex-col flex-1 gap-2">
        <Select
          className="h-10"
          options={wheelQuantityOptionList}
          value={quantity.toString()}
          onChange={handleChangeQuantity}
        />
        <Button size="lg" className="w-full" color="primary" rounded>
          {t("addToCart")}
        </Button>
      </div>
    </form>
  );
}
