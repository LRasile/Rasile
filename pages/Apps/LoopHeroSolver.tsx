import { ArrowLeftIcon, ArrowRightIcon, EmailIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Board, Solve } from '../../lib/LoopHeroThicketService'

export default function LoopHeroSolver() {   
  const [rotated, setRotated] = useState(false) 
  const [mirrored, setMirrored] = useState(false) 

  useEffect(() => {
  }, []) 

  const imageStyle={
    height:600, 
    margin:'auto',   
    transform: (rotated ? 'rotate(180deg) ' : 'rotate(0deg) ') + (mirrored ? 'rotateY(180deg)' : 'rotateY(0deg)')
  }

  return (<>
  <ButtonGroup>
    <Button leftIcon={!mirrored ? <ArrowRightIcon /> :<ArrowLeftIcon/>}  onClick={()=>setMirrored(!mirrored)}>{!mirrored ? "Mirror" : "Un-Mirror"}</Button>
    <Button leftIcon={<SpinnerIcon />} onClick={()=>setRotated(!rotated)}>{!rotated ? "Rotate" : "Un-Rotate"}</Button>
    </ButtonGroup>
  <div className="flex-container">    
    <div className="flex-item">      <div style={{margin:'auto', textAlign:'center'}}>
      <Text fontSize='lg'>234% Attack Speed</Text>
      <Text fontSize='md'>22 Thickets</Text>
      <Text fontSize='md'>38 Rivers</Text></div>
      <img style={imageStyle} src="../images/5by12.jpg" title='234% Attack Speed'/></div>
    <div className="flex-item">     <div style={{margin:'auto', textAlign:'center'}}>
      <Text fontSize='lg'>176% Attack Speed</Text>
      <Text fontSize='md'> 14 Thickets </Text>
      <Text fontSize='md'> 34 Rivers</Text></div>
      <img style={imageStyle} src="../images/4by12.jpg" title='176% Attack Speed' />
    </div>
  </div></>
  )
}
