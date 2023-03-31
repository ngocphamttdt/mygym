import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { Counter } from "./counter"
import user from '@testing-library/user-event'


describe('Counter', () => {

  describe('initialized with defaultCount=10 and desciption="WWW"', () => {

    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />)
    })

    it('renders "Current Count: 10"', () => {
      expect(screen.getByText('Current Count: 10')).toBeInTheDocument()

    })
    it('renders tittle as "WWW"', () => {

      expect(screen.getByText(/WWW/)).toBeInTheDocument()
    })

    describe('when the incrementor changes to 5 and "+" button is clicked', () => {
      beforeEach(async () => {
        user.type(screen.getByLabelText(/Incrementor/), '{selectall}5')
        user.click(screen.getByRole('button', { name: 'Add to Counter' }))
        await screen.findByText('Current Count: 15')
      })
      it('renders "Current count: 15"', () => {
        expect(screen.getByText('Current Count: 15')).toBeInTheDocument()
      })

      it('renders too big, and will disappear after 300ms', async () => {
        await waitForElementToBeRemoved(() => screen.queryByText('I am too small'))
      })
    })

    // describe('when the incrementor changes to to empty and "+" btn is clicked', () => {
    //   beforeEach(async () => {
    //     user.type(screen.getByLabelText(/Incrementor/), '{selectall}{delete}')
    //     user.click(screen.getByRole('button', { name: 'Add to Counter' }))
    //     await screen.findByText('Current Count: 16')
    //   })
    //   it('renders "Current count: 16"', async () => {
    //     expect(screen.getByText('Current Count: 16')).toBeInTheDocument() 
    //   })
    // })


    // describe('when btn + is clicked', () => {
    //   beforeEach(() => {
    //     fireEvent.click((screen.getByRole('button', { name: 'Add to Counter' })))
    //     //fireEvent.click((screen.getByTestId('plus')))
    //   })
    //   it('renders "Current count: 1"', async () => {
    //     await screen.findByText('Current Count: 1')
    //   })
    // })

    // describe('when btn - is clicked', () => {
    //   beforeEach(() => {
    //     fireEvent.click((screen.getByTestId('minus')))
    //   })
    //   it('renders "Current count: -1"', () => {
    //     expect(screen.getByText('Current Count: -1')).toBeInTheDocument()
    //   })
    // })
  })


})