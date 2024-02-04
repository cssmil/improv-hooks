import { useEffect, useState } from "react";

export const Message = () => {





  useEffect(() => {
    console.log('A. el componente se monto');
    
    const handleMouseMove = (event) =>{
      console.log(event.x, event.y)
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('Z. el componente se desmonto');
      window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])
  


  return (
    <>
      <div>Message</div>
      <h3>clientX: {} </h3>
      <h3>clientY: {} </h3>
    </>
  )
}
