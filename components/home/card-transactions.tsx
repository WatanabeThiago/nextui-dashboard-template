import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const items = [
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "4500 USD",
    date: "9/20/2021",
  },
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "4500 USD",
    date: "9/20/2021",
  },
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "4500 USD",
    date: "9/20/2021",
  },
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "4500 USD",
    date: "9/20/2021",
  },
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "4500 USD",
    date: "9/20/2021",
  },
];

export const CardTransactions = () => {
  return (
    <Card
    isPressable
    className="col-span-12 sm:col-span-4 h-[300px] w-full bg-default-50">
    <CardHeader className="px-6 flex items-center text-center">
        <h4 className="font-semibold text-xl ">Vendas por Plataforma</h4>
    </CardHeader>

    <CardBody className=' '>
        <div className='flex justify-between bg-black/5 p-3 px-4 rounded-xl text-sm font-semibold text-black/70 dark:text-white/90'>
            <span>
                Plataforma
            </span>
            <span>
                Quantidade
            </span>
        </div>
        <div>
            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    iOS
                </span>
                <span>
                    2 ingressos
                </span>
            </div>

            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    Android
                </span>
                <span>
                    4 ingressos
                </span>
            </div>

            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    Desktop
                </span>
                <span>
                    1 ingressos
                </span>
            </div>
        </div>
    </CardBody>
</Card>
  );
};
