"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TableWrapper } from "../table/table";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import {  Link } from "@nextui-org/react";
import NextLink from "next/link";
import Card from "../Card";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className="h-full lg:px-6">
    <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Available Balance</h3>
          <div className="space-y-4 my-4 md:columns-2 max-w-[1200px] w-full">
                    <Card
                        alt='Ingressos Vendidos'
                        description='ingressos'
                        main='R$ 230,00'
                        src='https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        title='Vendidos'
                    />

                    <Card
                        alt='Ingressos Vendidos'
                        description='Ponto de Venda'
                        main="R$ 30k"
                        src="https://images.unsplash.com/photo-1553190842-24c3f93ba116?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title='Online'
                    />

                    <Card
                        alt='Ingressos Vendidos'
                        description='Ponto de Venda'
                        main="R$ 3k"
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title='Offline'
                    />

                    <Card
                        alt='Cancelados'
                        description='Cancelados'
                        main="12"
                        src="https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title='Ingressos'
                    />
          </div>
        </div>

        {/* Chart */}
        <div className="h-full flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Estatísticas</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardAgents />
          <CardTransactions />
        </div>
      </div>
    </div>

    {/* Table Latest Users */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
      <div className="flex  flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Últimos Clientes</h3>
        <Link
          href="/accounts"
          as={NextLink}
          color="primary"
          className="cursor-pointer"
        >
          Ver Tudo
        </Link>
      </div>
      <TableWrapper />
    </div>
  </div>
);
