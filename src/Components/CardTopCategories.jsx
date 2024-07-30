/* eslint-disable react/prop-types */
import './CardTopCategories.css'

const CardTopCategories = (props) => {
  return (
    <>
      <div className='Card-TopCateg'>
        <div className='title-categories'>
          <span>{props.title}</span>
        </div>
        <div className='image-categories'>
          <img src={props.image} alt='' />
        </div>
      </div>
    </>
  )
}

export default CardTopCategories
