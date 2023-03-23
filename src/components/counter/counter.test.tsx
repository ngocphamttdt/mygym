import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), '{selectall}5')
        user.click(screen.getByRole('button', { name: 'Add to Counter' }))
      })
      it('renders "Current count: 15"', () => {
        expect(screen.getByText('Current Count: 15')).toBeInTheDocument()
      })
    })
  })

  // describe('when btn + is clicked', () => {
  //   beforeEach(() => {
  //     fireEvent.click((screen.getByRole('button', { name: 'Add to Counter' })))
  //     //fireEvent.click((screen.getByTestId('plus')))
  //   })
  //   it('renders "Current count: 1"', () => {

  //     expect(screen.getByText('Current Count: 1')).toBeInTheDocument()
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