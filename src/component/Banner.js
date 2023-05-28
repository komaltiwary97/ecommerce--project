import React from "react";
import { Styleddiv } from "./Styled";

const Banner = ({type, homeData}) => {
    return (
        <Styleddiv>
            <h1 style={{marginTop:'0px'}}>{`${type} dashboard`}</h1>
            <h3>{homeData.name}</h3>
            
        </Styleddiv>
    )
};
export default Banner;