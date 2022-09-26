// loader from  https://loading.io/css/
import React from 'react';
import './Loader.css'

interface LoaderProps {
    children?: React.ReactNode;
    // onClick?: () => void;
    // size?:string
}


const Loader = () => {
    return (
        <div className={'loader'} style={{height: window.innerHeight - 50}}>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;


//         <div>
//             <div>
//                   // style={{height: window.innerHeight - 50}}
//                   // alignItems={"center"}
//                   // justifyContent={"center"}
//
//                 <div>
//                       // container
//                       // alignItems={"center"}
//                       // direction={"column"}
//
//                     <div className="lds-ellipsis">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     );
// };
