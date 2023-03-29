import React from 'react'
import {useContext} from 'react'
import Feedbackitem from './Feedbackitem'
import Spinner from'./shared/Spinner'

import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
     
  const {feedback,isLoading} = useContext(FeedbackContext)
     

    if(!isLoading&&feedback.length===0) return <p>NO Feedback yet!</p>

    return isLoading ? <Spinner /> : (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>( 
          <motion.div
           key={item.id}
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}
          >
          <Feedbackitem key={item.id} 
          item={item}
          
          />
          </motion.div>
        )) }
        </AnimatePresence>
      </div>
    )

    






 
}


export default FeedbackList
