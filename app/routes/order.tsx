import { Flex } from "@chakra-ui/react";
import NavOrder from "~/layouts/NavOrder";
import { ImplementGrid } from "~/layouts/Grid";
import { GetDataProductReadyToShip } from "~/modules/order/order.service";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const api_key = process.env.API_LAKOE_TEST;

  const dataProductReadyToShip = await GetDataProductReadyToShip();

  return {
    dataProductReadyToShip,
    api_key,
  };
}

export default function Order() {
  const data = useLoaderData<typeof loader>();
  return (
    <ImplementGrid>
      <Flex align={"center"} justify={"center"} h={"100vh"}>
        <NavOrder cardProduct={data} />
      </Flex>
    </ImplementGrid>
  );
}
