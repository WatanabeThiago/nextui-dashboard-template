import { Avatar, AvatarGroup, Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const pictureUsers = [
  "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  "https://i.pravatar.cc/150?u=a04258114e29026702d",
  "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
];

export const CardAgents = () => {
  return (
    <Card
    isPressable
    className="col-span-12 sm:col-span-4 h-[300px] w-full bg-default-50">
    <CardHeader className="px-6 flex items-center text-center">
        <h4 className="font-semibold text-xl ">Ingressos</h4>
    </CardHeader>

    <CardBody >
        <div className='flex justify-between bg-black/5 p-3 px-4 rounded-xl text-sm font-semibold text-black/70 dark:text-white/90'>
            <span>
                Ingresso
            </span>
            <span>
                Quantidade
            </span>
        </div>
        <div>
            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    Área VIP - 1° Lote
                </span>
                <span>
                    1.33% (2/50)
                </span>
            </div>


            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    Camarote - 1° Lote
                </span>
                <span>
                    2.33% (3/50)
                </span>
            </div>
            <div className='font-semibold text-sm p-4 flex justify-between'>
                <span>
                    Pista - 1° Lote
                </span>
                <span>
                    4.33% (9/50)
                </span>
            </div>
        </div>
    </CardBody>
</Card>
  );
};
