import React from "react";
import LatestDisplay from '../component/home/latestDisplay'
import {create} from 'react-test-renderer';

var data= [
  {
    "id": 1,
    "name": "React",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
  },
  {
    "id": 2,
    "name": "Angular",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography-1.png"
  },
  {
    "id": 3,
    "name": "Node Js",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png"
  },
  {
    "id": 4,
    "name": "MongoDB",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
  },
  {
    "id": 5,
    "name": "Express Js",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://miro.medium.com/max/1160/0*skYUWg3ZvcY8xRf5"
  },
  {
    "id": 6,
    "name": "Cloud Computing",
    "content": "These  courses are specialy thought by the professionals and these are the best in ethe industry",
    "image": "https://cdn.logicaldoc.com/images/blog/cloud_images_of_technology.webp"
  }
]

describe('Snapshot test',()=>{
    test('testing component should run without data',()=>{
        let tree = create(<LatestDisplay ldata={data}/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })

})
