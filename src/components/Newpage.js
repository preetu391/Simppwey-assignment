import { useParams } from "react-router-dom";

function Newpage(){
    const params = useParams();
    return (
        <div>
            Newpage {params.id};
        </div>
    )
}

export default Newpage