import React from 'react'

export const Card = ({title,description,img,row}) => {
  return (
    <div className='container' style={{flexDirection:row?"row":"row-reverse"}}>
        <div className="left">
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <a >Read More</a>
            </div>
        </div>
        <div className="right">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
