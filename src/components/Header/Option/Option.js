import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({correctAnswer, option}) => {
  // console.log( option);
  const clicktoAdd = ()=>{
    if(option === correctAnswer){
      toast.success('Right Ans' )
    }else{
      toast.error('Wrong Ans')
    }
  }
  return (
    <div>
      <input onClick={clicktoAdd} type="radio" /> {option}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Option;