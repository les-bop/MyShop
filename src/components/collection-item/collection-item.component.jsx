import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';



const CollectionItem= ({id, name,price,imageUrl}) => (
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
<div className='collection-footer'>
<div className='name'>{name}</div>
<span className='price'>{price}</span>
</div>
<CustomButton inverted >Add to cart</CustomButton>
        </div>
    
)

export default CollectionItem;