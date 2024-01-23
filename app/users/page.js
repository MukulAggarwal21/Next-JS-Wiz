import React from 'react'
import Image from 'next/image'
import NatureImage from '@/publici/Deks Image.jpeg'
const Users = () => {
  return (
    <div>
    <Image src={NatureImage} alt="Nature Image" width={1000} height={1000}/>
     <Image src="https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=is&k=20&c=7tnr7gZE9utt_rUDMtHH3hvuAFg4-VLBA7MsQwG4Ucc=" alt="Image 2" height={500} width={500} />

      Users
    </div>
  )
}

export default Users
