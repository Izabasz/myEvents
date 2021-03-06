import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "semantic-ui-react";
import {increment, decrement} from "./testReducer";
import TestPlaceInput from "./TestPlaceInput";

const Sandbox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);

    return (
      <>
          <h1>Test</h1>
          <h3>The data is: {data} </h3>
          <Button onClick={() => dispatch(increment(20))} content='Increment' color='green'/>
          <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red'/>
          <div style={{marginTop: 15}}>
              <TestPlaceInput />
          </div>
      </>
    );
};

export default Sandbox;