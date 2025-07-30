import "@testing-library/jest-dom"
import {fireEvent, render, screen} from "@testing-library/react"
import PrimaryInput from "../PrimaryInput"
import CalendarIcon from "@/assets/svgs/calendar.svg"

describe("PrimaryInput", () => {
  it("should renders a label", () => {
    render(<PrimaryInput label='Full Name' type='text' id='full-name' />)

    const label = screen.getByText("Full Name")

    expect(label).toBeInTheDocument()
  })

  it("renders a input and change its value", () => {
    render(<PrimaryInput label='username' type='text' id='username' />)

    const input = screen.getByLabelText(/username/i)
    fireEvent.change(input, {target: {value: "John"}})
    expect(input).toHaveValue("John")
  })

  it("should render a lebal with an icon", () => {
    render(<PrimaryInput label='Organization' type='text' id='organization' icon={CalendarIcon} />)

    const image = screen.getByRole("img")
    const imageAltText = image.getAttribute("alt")

    expect(image).toBeInTheDocument()
    expect(imageAltText).toBe("Icon")
  })
})
