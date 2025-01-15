import React from 'react';

const PostDataLazyLoading = ({item}) => {
    console.log("item",item)
  return (
    <p className='p-4'>{item.title}</p>
  );
}

export default PostDataLazyLoading;
