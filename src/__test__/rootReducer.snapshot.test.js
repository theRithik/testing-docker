import React from 'react';
import rootReducer from '../reducer/mainReducer';
import {create} from 'react-test-renderer'

describe('Snapshot Test',()=>{
    test('testing rootReducer',()=>{
        let tree= create(<rootReducer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})