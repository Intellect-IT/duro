import React from 'react'
import { useParams } from 'react-router-dom';

export default function Brand() {
    const { slug } = useParams();
  return (
    <h1>{slug}</h1>
  )
}
