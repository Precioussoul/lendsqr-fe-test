import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import PrimaryButton from "../primary-button"

describe("PrimaryButton", () => {
  it("renders a button", () => {
    render(<PrimaryButton children='Submit' />)

    const button = screen.getByRole("button")
    const buttonContent = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
    expect(buttonContent).toBeInTheDocument()
  })

  it("renders a button with children textcontent", () => {
    render(<PrimaryButton children='Create Account' />)

    const buttonContent = screen.getByText("Create Account")

    expect(buttonContent).toBeInTheDocument()
  })
})
