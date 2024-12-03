import React from 'react'
import { imgList } from '@/utils/helper'
import Image from 'next/image';


function Productitem({params}:{params:{productitem:string}}) {
    
    
     const findItem=imgList.find((e)=>{
        return e.id === +params.productitem;
    });
    if(findItem){
        return (
            <div>
           <h2>details</h2>
          {findItem.id}
          <Image
          src={`/images/product/${findItem.img}`}
          alt='product-detail'
          height={300}
          width={500}
          />
          {findItem.gender}
           
            </div>
          )
    }else{
        return(
            <>
            <h1>product not found</h1>
            </>
        )
    }
 
}

export default Productitem
