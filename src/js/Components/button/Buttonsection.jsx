import 'react';
import {Link} from "react-router-dom";
import Teklifalpage from "../../Pages/teklifalpage";

const Buttonsection = () => {
    return (
        <div className="container">
            <Link  to="/teklif-al" element={<Teklifalpage/>} >
                <button className="btn btn-primary" style={{width:300,height:50,marginTop:50}}>
                    Teklif Al
                </button>

            </Link>
        </div>
    );
};

export default Buttonsection;