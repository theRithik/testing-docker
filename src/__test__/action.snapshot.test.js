import React from "react";
import  courseList from '../action/actionFile'
import {create} from 'react-test-renderer'

describe('Snapshot Test',()=>{
    test('testing courseList',()=>{
        let tree = create(<courseList/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})