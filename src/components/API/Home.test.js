import { act, render } from '@testing-library/react';
import Home from './Home';

it('is a test definition', async () => {
  await act(async () => { 
    render(<Home />)
  })

  
})