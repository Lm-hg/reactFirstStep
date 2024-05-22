import Keys from "./keys"
export default function Cartes(props){
    const keysword=[
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},
        {keysword:"Tonnerre"},



    ]
    return (
        <div className="card">
            <div className="illustration">
                <div className="image">
                    <img src={props.lien} alt="" srcset="" />
                </div>
                <div className="nom">
                    <h2>{props.nom}</h2>
                </div>
                <div className="cout">
                    <h3>{props.cout}</h3>
                </div>
            </div>
                <div className="effet">
                        <div className="keywords">

                    {keysword.map((a)=>(

                            <Keys keys={a.keysword}/>
                    ))}
                        </div>
                <h2>Effet</h2>
                <p className="explication">
                    {props.explication}
                </p>
                </div>
            <div className="type">
                <h3>Type</h3>
            </div>
        
        </div>
    )
}