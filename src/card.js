import React from 'react'
import'./card.css'
function Card({title,imagUrl,body}) {
  return (
    <div className='card-container'>
      <div className="image-container">
          <img src={imagUrl} alt=''/>
      </div> 
      <div className="card-title">
         <h3>{title}</h3> 
      </div>
      <div className="card-body">
         <p>{body}</p> 
      </div>
      <div className="btn">
        <button>
            <a>
                view more
            </a>
        </button>
      </div>
    </div>
  )
}

export default Card
