import React from 'react';
import '../App.css'

export default function Cell(props) {
  return (
    <>
    <button className='cell' onClick = {props.handleClick}>{props.value}</button>
    </>
  )
}
