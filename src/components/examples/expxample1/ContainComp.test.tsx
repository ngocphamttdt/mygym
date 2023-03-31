import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContainComp } from "./ContainComp"

// jest.mock('./ChildComp', () => ({
//   ...jest.requireActual('./ChildComp'),
//   ChildComp: () => <div>Tan banh beo</div> //jest.fn() 
// }))

describe('Test contrain comp', () => {
  it('render container comp', () => {
    render(<ContainComp />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })
  it('onclick render Child comp', () => {
    render(<ContainComp />)
    userEvent.click(screen.getByRole('button', { name: 'Click me' }))
    expect(screen.getByText('Hello world1')).toBeInTheDocument()
  })
})