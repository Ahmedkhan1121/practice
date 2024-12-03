'use client';
import { imgList } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link';

function Product() {
  return (
    <div>
      {imgList.map((e)=>{
        return(
          <Link href={`/product/${e.id}`}>
            <Image
          src={`/images/product/${e.img}`}
          alt='product'
          height={300}
          width={300}
          />
          </Link>
        )
      })}
    </div>
  )
}

export default Product
