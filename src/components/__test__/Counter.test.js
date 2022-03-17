import React from 'react'
import Counter from '../Counter'
//to render component in vdom

import { render,fireEvent } from '@testing-library/react'
// to expect the outpu
import "@testing-library/jest-dom/extend-expect"
let getByTestId
beforeEach(()=>{
    const component =render(<Counter/>)
    getByTestId=component.getByTestId

})


//describing test
test("header renders correctly with correct test",()=>{


 const headerEl=getByTestId("header") 
 expect(headerEl.textContent).toBe("My count")
})

test("counter intially start with  0",()=>{


    const counterEl =getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
})

test("add button renders with +",()=>{

   
    const addbtn =getByTestId("add-btn")
    expect(addbtn.textContent).toBe("+")

})

test("input contain intial value of 1",()=>{

    const inputEl =getByTestId("input")
    expect(inputEl.value).toBe("1")
})


test("sub button renders with -",()=>{


    const subbtn =getByTestId("subb-btn")
    expect(subbtn.textContent).toBe("-")

})
test("changing value of input works correctly",()=>{


    const inputEl =getByTestId("input")
    //to trigger event
    expect(inputEl.value).toBe('1')
 fireEvent.change(inputEl,{
     target:{
         value:"5"
     }
 })
 expect(inputEl.value).toBe('5')
})