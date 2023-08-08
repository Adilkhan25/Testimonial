import { useState } from 'react';
import { BiSolidQuoteLeft, BiSolidQuoteRight} from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import reviews from '../data';
function Cards()
{
    const [id,setId] = useState(0);
    function leftSideHandler()
    {
            setId((id+4)%5);
    }
    function rightSideHandler()
    {
        setId((id+1)%5);
    }
    function randomHandler()
    {
        setId(Math.floor(Math.random()*5));
    }
    const data = reviews[id];
    return(
        <div className="Cards"> 
             <div className="image-div">
                 <img className="img" src={data.image} alt='profile pic'/>
                 <div className='image-circular-bg'></div>
             </div>
             <div className="name">
               <p>{data.name}</p> 
             </div>
             <div className="job">
               <p>{data.job}</p>
             </div>
             <div className='description-div'>
                 <BiSolidQuoteLeft color='blue'/>
                 <p className='description'>
                    {data.text}
                 </p>
                 <BiSolidQuoteRight color='blue'/>
             </div>
             <div className='slide-btn'>
                <button className='btn-slide-dir' onClick={leftSideHandler}>
                    <AiOutlineLeft fontSize="1.3rem"/>
                </button>
                <button className='btn-slide-dir' onClick={rightSideHandler}>
                    <AiOutlineRight fontSize="1.3rem"/>
                </button>
             </div>
             <div className='surprise-btn'>
                <button className='btn' onClick={randomHandler}>Surprise me</button>                        
             </div>
        </div>
    );
}
export default Cards;