import CardBox from "./card-box";

export default function Card(props) {
    return(
        <div className=" p-3 aspect-9/12 h-full bg-emerald-600/80  flex flex-col items-center relative 
        bg-[url(http://localhost:3333/assets/textura_sombra.png)]">
            <div className=" p-1 flex flex-col items-center h-full w-full gap-2 bg-[url(/textura-fogo.png)]">
                <CardBox h="h-1/10 font-mono" gradient center>
                    <h1 className="text-[10cqw]">{props.nome}</h1> 
                </CardBox>

                <div className={` w-full h-5/10 bg-red-400/50 `}>
                    <img src={props.imagem} alt="Imagem da carta"
                    className="h-full w-full object-cover"/>
                </div>
                
                <CardBox h="h-1/10 font-mono" center>
                    <span className="text-[10cqw]">{props.tipo}</span>
                </CardBox>
                
                <CardBox h="h-3/10 text-xs">
                    <p className="text-[8cqw] font-normal">{props.descricao}</p>
                </CardBox>

                <div className=" flex absolute right-0 bottom-0 p-2 font-mono">
                    <div className="bg-white p-1 border rounded-sm text-black font-bold">
                    {props.atk}/{props.life}</div>
                </div>
            </div>
        </div>
    );
}





