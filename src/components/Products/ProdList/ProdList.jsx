import React, { useContext, useEffect } from 'react';
import { productContext } from '../../../Context/ProductContextProvider';

const ProdList = () => {
    const { products, getProd } = useContext(productContext);

    useEffect(() => {
        getProd();
    }, []);
    
    return (
        <div>
            
        </div>
    );
};

export default ProdList;