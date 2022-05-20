
// import React, { useState, useEffect } from 'react'
import NavigationMenu from './NavginationMenu'
import BlogCard from './BlogCard'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
function Blog() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const menuItemClicked = (category) =>{
    // setloading(true)
    axios.get('http://localhost:5000/getBlogByCategory/'+category)
    .then((res) => {
        setData(res.data.data);
        // setloading(false)
      });
    }
  useEffect(() => {
    axios.get('http://localhost:5000/getblog?page=1&limit=5')
      .then((res) => {
        setData(res.data.data);
        // console.log(res)
        setloading(false)
      });
  });
  if (loading) {
    return <h4>loading data</h4>
  }
  else {
    var showdata = '';
    showdata = data.map((item) => {
      return (
        <div>
          <BlogCard key={item.id} data={item} onClick={menuItemClicked}
          />
        </div>
      )
    })
  }
  
  
  const myLists = [
    'All',
    'Blog',
    'Environment',
    'Stock Market',
    'Art and culture',
    'technology'
  ];
  return (
    <div>
      <img src="Image.png" className="images"></img>
      <div className="title">1-Minute Marketing Tips: copywriting that Sells</div>
      <p>Lessons for writing compelling copy</p>
      <NavigationMenu menuItems={myLists} onMenuItemsClicked={menuItemClicked} />
      {showdata}
      
      </div>
  );
}
export default Blog;
