export default function CardBox(props) {
    const bgGradient = props.gradient ? "bg-[linear-gradient(140deg,rgba(137,152,171,1)_0%,rgba(94,104,85,1)_0%,rgba(120,29,29,0.96)_0%,rgba(212,195,110,1)_100%)]" : "";
    const itemsCenter = props.center ? "items-center" : "";

    return(
        <div className={`@container w-full ${props.h} bg-[#fff] ${bgGradient}
            text-black font-bold  border shadow-[inset_2px_-2px_0px_black,inset_-2px_2px_0px_rgba(255,255,255,0.5)]
            rounded-md px-2 flex ${itemsCenter}`}>
            {props.children}
        </div>
    );
}