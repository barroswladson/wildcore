"use client";
import Card from "@/components/card";
import CardModal from "@/components/card-modal";
import Menu from "@/components/menu";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const search = useSearchParams();
  const open = search.has("criar-cartas");
  const [cards, setCards] = useState([]);
    // {
    //   nome,
    //   tipo:"dados",
    //   atk:1,
    //   life:3,
    //   descricao:"erro, ajeita isso",
    //   imagem:"http://localhost:3333/api/assets/download/cyberpunk-poster-illustration.webp" ,
    // }
  
  useEffect(() => {
    const buscar = async ()=>{
      try { 
        const res = await fetch("http://localhost:3333/cards",{
          method:"GET",
        });
        const cardsRes = await res.json();
        console.log(cardsRes); 
        setCards(cardsRes);
      }
      catch(e){
        console.log("ERRO");
      }
    };
    buscar();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[radial-gradient(#e4ff6a,#98af32)] font-sans">
      <Menu/>
      {open && <CardModal />}
      <div className="flex flex-col w-[70vw] h-[90vh] gap-4">

        {/* CAMPO DE CIMA */}
        <div className="bg-[rgb(255,255,255,0.6)] h-1/4 flex rounded-[12px] p-3">
          {cards.map((c)=><Card nome={c.nome}  tipo={c.tipo} atk={c.atk} life={c.life} 
          descricao={c.descricao} imagem={`http://localhost:3333/assets/${c.imagem}`}></Card>)}
        </div>

        {/* CAMPO DO MEIO */}
        <div className="border-2 border-white h-2/4 flex rounded-[12px] p-5">
          {cards.map((c)=><Card nome={c.nome} tipo={c.tipo} atk={c.atk} life={c.life} 
          descricao={c.descricao} imagem={`http://localhost:3333/assets/${c.imagem}`}></Card>) }
        </div>

        {/* CAMPO DE BAIXO */}
        <div className="bg-[rgb(255,255,255,0.6)] h-1/4 flex rounded-[12px] p-3">
          {cards.map((c)=><Card nome={c.nome}  tipo={c.tipo} atk={c.atk} life={c.life} 
          descricao={c.descricao} imagem={`http://localhost:3333/assets/${c.imagem}`}></Card>)}
        </div>

      </div>
    </div>

  );
}
